import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { CreateAccountData } from "../screens/CreateAccount/types";
import { url } from "inspector";

/**
 * Calls to firebase are made here
 */
class FirebaseServices {
  /**
   * Create user
   * @param data: email and password
   * @returns signed-in user
   */
  public createUserService = (newUserInfo: CreateAccountData) =>
    createUserWithEmailAndPassword(
      auth,
      newUserInfo.email,
      newUserInfo.password
    )
      .then((user) => user)
      .catch((e) => {
        return { errorCode: e.code, errorMessage: e.message };
      });

  /**
   * Update users information. Firebase only allows create account with email and password. Need to update user's info after
   * @param updates
   * @returns updated profile
   */
  public updateUserService = (name: string) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: 'https://dummyimage.com/30x30/ffffff/000000.png',
      });
    }
  };

  // Sequential call of promises
  // public asda = (data:any) => {
  //   return this.createUserService(data).then(()=> {
  //     return this.updateUserService('lol')!.then(res=>res).catch(e=>console.log('2', e))
  //   }
  //     ).catch(e => console.log('1',e))
  // }
}

const firebaseServices = new FirebaseServices();
export default firebaseServices;
