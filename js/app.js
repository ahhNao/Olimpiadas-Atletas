function pesquisar() {
  // Busca a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
    section.innerHTML =
      "Nada foi encontrado. Você precisa digitar o nome do atleta ou esporte";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os dados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre os dados e constrói o HTML para cada item
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      resultados += `
        <div class="item-resultado" id="resultados-pesquisa">
            <h2>
                <a href="${dado.link}" target="_blank">${dado.titulo}</a>
            </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Saiba mais</a>
            </div>
    `;
    }
  }

  if (!resultados) {
    resultados = "<p>Nenhum atleta foi encontrado</p>";
  }

  // Atualiza o conteúdo da seção com os resultados
  section.innerHTML = resultados;
}
