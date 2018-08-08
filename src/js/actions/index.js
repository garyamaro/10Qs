import { 
	GO_TO_GAME_LEVEL, 
	START_GAME,
	IS_LOADING,
	NEXT_QUESTION,
	EXIT_GAME
} from "../constants/action-types";

export const goToGameLevel = () => ({type: GO_TO_GAME_LEVEL});
export const startGame = questions => ({type: START_GAME, payload: questions});
export const isLoading = () => ({type: IS_LOADING});
export const nextQuestion = isCorrect => ({type: NEXT_QUESTION, payload: isCorrect});
export const exitGame = () => ({type: EXIT_GAME});