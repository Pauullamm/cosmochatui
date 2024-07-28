const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { user } = require('firebase-functions/v1/auth');

admin.initializeApp();

const db = admin.firestore();

exports.updateAndFetchLogin = functions.https.onCall(async (data, context) => {
    const userId = context.auth.uid;
    if (!userId) {
        throw new functions.https.HttpsError('unauthenticated', 'The function must be called while authenticated');
    }
    const userDocRef = db.collection('users'.doc(userId));
    try {
        const updatedLoginCount = await db.runTransaction(async (transaction) => {
            const userDoc = await transaction.get(userDocRef);
            if (userDoc.exists) {
                const currentLoginCount = userDoc.data().loginCount || 0;
                const newLoginCount = currentLoginCount + 1;
                transaction.update(userDocRef, {
                    loginCount: newLoginCount,
                });

                return newLoginCount;
            } else {
                transaction.set(userDocRef, {
                    loginCount: 1
                });
                return 1;
            }
        });
        console.log(`Login count updated for user: ${userId}, new count: ${updatedLoginCount}`);
        return { loginCount: updatedLoginCount };
    } catch (error) {
        console.error('Error updating and fetching login count:', error);
        throw new functions.https.HttpsError('internal', 'Error updating login count');
    }
})