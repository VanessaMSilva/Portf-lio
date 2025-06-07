<?php
include_once("templates/header.php");
?>


<div class="container-fluid" id="inicio">
    <div class="inicio-conteudo">
        <h2>Olá, eu sou</h2>
        <h1>Vanessa Machado Silva</h1>
        <h3>Desenvolvedora Full Stack Júnior</h3>

        <p>
            Experiência em desenvolvimento web.
            Gosto de transformar ideias em soluções funcionais e bem estruturadas.
        </p>

        <a href="#projetos" class="btn">Ver Projetos</a>
        <a href="#contato" class="btn btn-secundario">Fale Comigo</a>
    </div>
</div>

<div class="container-fluid" id="sobre">
    <div>
        <h1>Sobre</h1>
        <p>Sou estudante de Sistemas de Informação com experiência prática em desenvolvimento web, automação de formulários com Scriptcase e integração de sistemas com bancos de dados. Atualmente, trabalho no desenvolvimento de soluções para o setor de saúde, criando formulários dinâmicos que geram PDFs diretamente a partir dos dados cadastrados.</p>
        <p>Já ministrei cursos introdutórios de programação, como o Tech Kids (voltado para crianças, com programação em blocos), além de minicursos sobre Python, Web Scraping e Machine Learning. Também participei de iniciativas como o PET Jovens Programadores e da Maratona Mineira de Programação. Estou sempre em busca de novos conhecimentos e desafios na área de tecnologia.</p>
    </div>
</div>

<div class="container-fluid" id="projetos">
    <div>
        <h1>Projetos</h1>
        <div class="trabalhos">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="images/agenda.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="images/blog.png" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="images/moviestar.png" alt="Third slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        <!-- <div class="cards">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="images/agenda.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Agenda</h5>
                    <p class="card-text">Projeto web de uma agenda</p>
                    <a href="#" class="btn btn-primary">Saiba +</a>
                </div>
            </div>
        </div> -->
    </div>
</div>



<?php
include_once("templates/footer.php");
?>