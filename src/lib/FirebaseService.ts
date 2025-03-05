import { defaultExercises } from "@/data/exercises";
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  Firestore,
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";

interface FirebaseConfig {
  apiKey?: string;
  projectId?: string;
}

export interface Exercise {
  id: string;
  area: string;
  machine: string;
  nameKo?: string;
  nameEn?: string;
}

export class FirebaseService {
  private db: Firestore;

  constructor() {
    const firebaseConfig: FirebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    };

    if (!getApps().length) {
      const app = initializeApp(firebaseConfig);
      this.db = getFirestore(app);
    } else {
      this.db = getFirestore(getApp());
    }
  }

  // 운동 종류 데이터 가져오기
  async getExercises(userId: string): Promise<Exercise[]> {
    const userExercisesRef = await collection(
      this.db,
      "users",
      userId,
      "exercises"
    );
    const snapshot = await getDocs(userExercisesRef);

    if (snapshot.empty) {
      // 새로운 유저인 경우 기본 운동 종류 데이터 추가
      for (const exercise of defaultExercises) {
        const exerciseRef = doc(userExercisesRef);
        await setDoc(exerciseRef, exercise);
      }
      return defaultExercises;
    } else {
      // 기존 유저인 경우 보유 데이터 반환
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Exercise[];
    }
  }
}

export const firebaseService = new FirebaseService();
