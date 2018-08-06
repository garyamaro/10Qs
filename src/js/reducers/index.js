import { 
	GO_TO_GAME_LEVEL, 
	START_GAME,
	IS_LOADING,
	ADD_SCORE,
	NEXT_QUESTION,
	EXIT_GAME
} from "../constants/action-types";

import {
	HOME_BOARD,
	GAME_LEVEL_BOARD,
	QUESTION_BOARD,
	TOTAL_SCORE_BOARD
} from "../constants/page-names";

const initialState = {
	questions: [],
	currentQuestion: null,
	currentQuestionNumber: 0,
	isLoading: false,
	totalScore: 0,
	page: HOME_BOARD
};

const rootReducer = ( state = initialState, action) => {
	switch (action.type) {
		case GO_TO_GAME_LEVEL:
			return { ...state, 
				page: GAME_LEVEL_BOARD, 
				totalScore: 0 
			};
		case START_GAME:
			return { ...state, 
				isLoading: false, 
				page: QUESTION_BOARD, 
				questions: action.payload, 
				currentQuestion: action.payload[0], currentQuestionNumber: 1
			};
		case IS_LOADING:
			return { ...state, 
				isLoading: action.payload 
			};
		case NEXT_QUESTION: 
			if(state.questions.indexOf(state.currentQuestion) == 9){
				return { ...state, 
					totalScore: state.totalScore + (action.payload ?  1 : 0), 
					page: TOTAL_SCORE_BOARD
				};
			}
			return { ...state, 
				totalScore: state.totalScore + (action.payload ?  1 : 0), 
				currentQuestion: state.questions[state.questions.indexOf(state.currentQuestion) + 1],
				currentQuestionNumber: state.currentQuestionNumber + 1
			};
		case EXIT_GAME:
			return { ...state,
				page: HOME_BOARD, 
				totalScore: 0
			};
		default:
			return state;
	}
};

export default rootReducer;