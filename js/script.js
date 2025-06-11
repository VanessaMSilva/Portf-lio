function mostrarInfo($nome) {
if($nome == "blog"){
  Swal.fire({
    title: 'Blog codar',
    html: `
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/_-qhnMbsq3E?si=Ey70GLrPYMrSp_CY"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
      <p>Blog desenvolvido com as tecnologias PHP, CSS, Bootstrap e JavaScript.</p>

      <p><a id="sweet" href="https://github.com/VanessaMSilva/Projetos/tree/main/Blog" target="_blank">GitHub: VanessaMSilva/Projetos</a></p>
    `,
    width: 700,
    confirmButtonText: 'Fechar'
  });
}else if($nome == "agenda"){
Swal.fire({
    title: 'Minha agenda',
    html: `
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/nbUNgzkCw8w?si=ANcO1h9WnLkrbrkP"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
      <p>A Agenda é um projeto desenvolvido com as tecnologias PHP, CSS, Bootstrap, JavaScript e MySQL.</p>


      <p><a id="sweet" href="https://github.com/VanessaMSilva/Projetos/tree/main/agenda" target="_blank">GitHub: VanessaMSilva/Projetos</a></p>
    `,
    width: 700,
    confirmButtonText: 'Fechar'
  });
}

}