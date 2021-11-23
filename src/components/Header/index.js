import './header.module.css';

export function Header() {
  function updatePage() {
    window.location.reload();
  }
  return (
    <header>
      <p>Приветствуем Вас в новой социальной сети:</p>
      <h3 onClick={updatePage}>Обновить чат</h3>
    </header>
  )
}