import type { FilterType } from '../types/todo'

interface Props {
  current: FilterType
  onChange: (f: FilterType) => void
}

const FILTERS: { label: string; value: FilterType }[] = [
  { label: 'すべて', value: 'all' },
  { label: '未完了', value: 'active' },
  { label: '完了済み', value: 'completed' },
]

export function TodoFilter({ current, onChange }: Props) {
  return (
    <div className="todo-filter">
      {FILTERS.map(f => (
        <button
          key={f.value}
          className={current === f.value ? 'active' : ''}
          onClick={() => onChange(f.value)}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
