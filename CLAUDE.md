# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # 依存関係インストール
npm run dev        # 開発サーバー起動 (http://localhost:5173)
npm run build      # プロダクションビルド (tsc + vite build)
npm run lint       # ESLint
npm run preview    # ビルド結果のプレビュー
```

## Architecture

React 18 + TypeScript + Vite の Todo アプリ。

**データフロー**: `useTodos` hook が全状態を管理し、`App.tsx` がコンポーネントにバインド。localStorage に自動永続化。

**主要ファイル**:
- [src/hooks/useTodos.ts](src/hooks/useTodos.ts) — Todo の CRUD・フィルター・localStorage 永続化
- [src/types/todo.ts](src/types/todo.ts) — `Todo` 型・`FilterType` 型定義
- [src/App.tsx](src/App.tsx) — ルートコンポーネント（hook とコンポーネントの接続点）
- [src/App.css](src/App.css) — 全スタイル（plain CSS、外部ライブラリなし）

**コンポーネント** ([src/components/](src/components/)):
- `TodoInput` — テキスト入力・Enter/ボタンで追加
- `TodoItem` — チェックボックス・ダブルクリック編集・削除
- `TodoList` — リスト描画・空状態
- `TodoFilter` — All / 未完了 / 完了済み の切り替え
- `TodoFooter` — 残件数表示・完了済み一括削除
