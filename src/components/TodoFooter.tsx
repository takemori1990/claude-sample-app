interface Props {
  activeCount: number
  completedCount: number
  onClearCompleted: () => void
}

export function TodoFooter({ activeCount, completedCount, onClearCompleted }: Props) {
  return (
    <div className="todo-footer">
      <span>{activeCount} 件残り</span>
      {completedCount > 0 && (
        <button className="clear-btn" onClick={onClearCompleted}>
          完了済みを削除
        </button>
      )}
    </div>
  )
}
