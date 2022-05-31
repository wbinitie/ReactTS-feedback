export interface Item {
  id: number | string;
  rating: number;
  text: string;
}
export type FeedbackContextType = {
  feedback: Item[];
  isLoading: boolean;
  handleDelete: (id: number | string) => void;
  addFeedback: (item: Item) => void;
  editFeedback: (item: Item) => void;
  feedbackEdit: { item: {}; edit: boolean };
  updateFeedback: (id: string | number, updItem: Item) => void;
};
