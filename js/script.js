function mostrarInfo($nome) {
  if ($nome == "blog") {
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
  } else if ($nome == "agenda") {
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
  } else if ($nome == "movie") {
    Swal.fire({
      title: 'Avaliar filmes',
      html: `
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/9pRPOpl8fzs?si=wJF4IXc-dQ1g8r9N"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
      <p> O avaliador de filmes é um projeto desenvolvido com as tecnologias PHP, CSS, Bootstrap, JavaScript e MySQL.</p>


      <p><a id="sweet" href="https://github.com/VanessaMSilva/Projetos/tree/main/moviestar" target="_blank">GitHub: VanessaMSilva/Projetos</a></p>
    `,
      width: 700,
      confirmButtonText: 'Fechar'
    });
  } else if ($nome == "museu") {
    Swal.fire({
      title: 'Museu Virtual',
      html: `
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/haX-ldFKVOA?si=aRJjH9s_S_xoMRe-"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
      <p> O museu virtual é um projeto desenvolvido com as tecnologias PHP, CSS, Bootstrap, JavaScript e MySQL.</p>


      <p><a id="sweet" href="https://github.com/VanessaMSilva/ProgPI-II/tree/main/TrabalhoMuseu" target="_blank">GitHub: VanessaMSilva/Projetos</a></p>
    `,
      width: 700,
      confirmButtonText: 'Fechar'
    });
  } else if ($nome == "tialu") {
    Swal.fire({
      title: 'Vendas da Tia Lu',
      html: `
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/iXX5g4CEbB8?si=6l07_9QqM90xx-1A"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
      <p>O vendas da tia lu é um projeto desenvolvidos com node.js, react, prisma, docker,
       javascript, python para realizar o web scraping do pdf dos ônibus da UFU e da pagina de sobre da tia lu online</p>


      <p><a id="sweet" href="https://github.com/VanessaMSilva/TiaLu_Back_end" target="_blank">GitHub: VanessaMSilva/Back-end</a></p>
    <p><a id="sweet" href="https://github.com/VanessaMSilva/TiaLu_Front_End" target="_blank">GitHub: VanessaMSilva/Front-end</a></p>
    <p><a id="sweet" href="https://github.com/VanessaMSilva/FastAPI" target="_blank">GitHub: VanessaMSilva/WebScraping</a></p>
      `,
      width: 700,
      confirmButtonText: 'Fechar'
    });
  }else if ($nome == "lista") {
    Swal.fire({
      title: 'Lista de tarefas',
      html: `
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/55-71grUALc?si=UVsWrQPPNgpnJrVd"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
      <p>A lista de tarefas é um projeto desenvolvidos com node.js, react, prisma.</p>


      <p><a id="sweet" href="https://github.com/VanessaMSilva/Curso-react/tree/main/projeto03" target="_blank">GitHub: VanessaMSilva/ListaDeTarefas</a></p>
   `,
      width: 700,
      confirmButtonText: 'Fechar'
    });
  }else if ($nome == "mapa") {
    Swal.fire({
      title: 'Mapa',
      html: `
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/lJrcZ6PrLss?si=NieAU_bzgGYuBoqJ"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
      <p>O mapa é um projeto desenvolvidos com react, firebase, javascript, css.</p>


      <p><a id="sweet" href="https://github.com/VanessaMSilva/Mapa" target="_blank">GitHub: VanessaMSilva/Mapa</a></p>
   `,
      width: 700,
      confirmButtonText: 'Fechar'
    });
  }

}