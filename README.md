# Interbet

Protótipo navegável do app de apostas dos jogos universitários (Integramix), feito a partir do design no Figma.

## Como rodar
É um site estático, sem build: abra `index.html` no navegador ou sirva a pasta com qualquer servidor
(ex.: `npx serve .`).

## Estrutura
- `index.html` – casca do app
- `app.css` – design system e estilos de todas as telas
- `app.js` – dados, roteamento por hash (`#home`, `#evento`, `#rankings`…) e interações
- `img/` – escudos, ícones e imagens exportados do Figma

## Observações
- Pagamentos (Pix) e saques são **simulados**; nenhum valor real é processado.
- O progresso fica salvo no `localStorage` do navegador.
