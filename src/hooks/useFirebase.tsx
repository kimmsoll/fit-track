import { FirebaseService, firebaseService } from "@/lib/FirebaseService";

export const useFirebase = (): FirebaseService => {
  return firebaseService;
};
