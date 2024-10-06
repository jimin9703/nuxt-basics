import { defineStore } from 'pinia';
import axiosInstance from "../utility/axiosInstance";

export const useBoardStore = defineStore('boardStore', {
    state: () => ({
        boards: [] as Array<{ boardId: number; title: string; writer: string; regDate: string }>,
    }),

    actions: {
        async requestBoardListToDjango() {
            try {
                const response = await axiosInstance.djangoAxiosInst.get('/board/list');
                this.boards = response.data;
            } catch (error) {
                console.error('게시글 목록을 불러오는 중 오류가 발생했습니다:', error);
            }
        }
    }
});
