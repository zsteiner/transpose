type NotationProps = {
  notes: string[];
  notationKey: string;
  transposeSteps: number;
};

export const Notation = ({ notes, notationKey, transposeSteps }: NotationProps) => {

  return (
    <div>
      {notes.join('')}
      {notationKey}
    </div>
  )
}
