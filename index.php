<?php
include 'inc/topo.php';
include 'inc/menu.php';
?>

<!--BANNER-->

    <div class="row" id="banner-content">
        <div class="col-lg-6">
            <h2><strong>Torne-se sócio</strong> de startups inovadoras a partir de <strong>R$ 500,00</strong></h2>
            <h3>Conheça o modelo de Equity Crowdfunding, a partir de <br>R$ 500,00 você se tornar sócio de uma empresa inovadora.</h3>
            <a href="/quero-investir.php" title="Quero investir agora" class="btn btn-investir">
                Quero investir agora
            </a>
        </div>
        <div class="col-lg-6">
            <img src="/assets/img/man-home.png" class="img-fluid" alt="Conheça o modelo de Equity Crowdfunding, a partir de R$ 500,00 você se tornar sócio de uma empresa inovadora." title="Conheça o modelo de Equity Crowdfunding, a partir de R$ 500,00 você se tornar sócio de uma empresa inovadora.">
        </div>
    </div>
    </div>
</section>
<!--Termina seção topo-->

<!--VANTAGENS-->

<section class="wow slideInLeft" data-wow-duration="2s" id="vantagens">
    <svg class="STICKER" viewBox="119.738 -73.106 615.437 695.583">
        <path fill="rgba(246,215,214,1)" id="STICKER" d="M 442.2153930664063 -73.10621643066406 C 505.3286743164063 -73.10621643066406 536.917724609375 -9.876947402954102 588.3456420898438 19.36474418640137 C 694.4686279296875 79.70550537109375 735.1754760742188 201.0425262451172 735.1754760742188 332.124267578125 C 735.1754760742188 526.3192138671875 487.9191284179688 622.4124755859375 293.7241821289063 622.4124755859375 C 290.4228515625 622.4124755859375 296.9515380859375 622.5567626953125 293.7241821289063 622.4124755859375 C 106.9826126098633 614.0654296875 119.9301910400391 428.0609741210938 119.9301910400391 237.1673278808594 C 119.9301910400391 136.9633178710938 208.2841339111328 111.5718536376953 267.8978271484375 58.2515869140625 C 323.9686279296875 8.100099563598633 348.2244873046875 -73.10621643066406 442.2153930664063 -73.10621643066406 Z">
        </path>
    </svg>
    <div class="container">
        <h2 class="text-center">Vantagens de Investir Conosco</h2>
        <div class="row">
            <div class="col-lg-3 vntg-box">
                <img src="/assets/img/icon-rentabilidade.png" class="img-circle" alt="Alta Rentabilidade" title="Alta Rentabilidade">
                <h3>Alta Rentabilidade</h3>
                <p>Possibilidade de rendimento acima de qualquer ativo do mercado financeiro, para investidores;</p>
            </div>
            <div class="col-lg-3 vntg-box">
                <img src="/assets/img/icon-processo.png" class="img-circle" alt="Processo Seletivo" title="Processo Seletivo">
                <h3>Processo Seletivo</h3>
                <p>Sinta-se confiante para investir em nossas startups que foram analisadas por quem entende do mercado;</p>
            </div>
            <div class="col-lg-3 vntg-box">
                <img src="/assets/img/icon-investir.png" class="img-circle" alt="Fácil Investir" title="Fácil Investir">
                <h3>Fácil Investir</h3>
                <p>Modalidade permite que pequenos investidores, não profissionais, realizem investimentos.</p>
            </div>
            <div class="col-lg-3 vntg-box">
                <img src="/assets/img/icon-ajude.png" class="img-circle" alt="Ajude a financiar o futuro" title="Ajude a financiar o futuro">
                <h3>Ajude a financiar o futuro</h3>
                <p>Os empresários são inovadores, sonhadores, loucos o suficiente para potencialmente mudar o mundo. Ao apoiá-los, você também pode fazer a diferença.</p>
            </div>
        </div>
    </div>
</section>

<!--OFERTAS-->

<section class="wow slideInLeft" data-wow-duration="2s" id="ofertas">
    <svg class="bg_p" viewBox="-22.5 48.096 2000 1108.908">
        <linearGradient id="bg_p" spreadMethod="pad" x1="0.5" x2="0.5" y1="0" y2="1">
            <stop offset="0" stop-color="#f9f9f9" stop-opacity="1"></stop>
            <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
        </linearGradient>
        <path fill="url(#bg_p)" id="bg_p" d="M -22.5 48.095703125 L 1977.499877929688 160.142578125 L 1977.499877929688 1157.00390625 L -22.5 1157.00390625 L -22.5 48.095703125 Z">
        </path>
    </svg>
    <div class="container">
        <div class="title">
            <h2 class="text-center">Ofertas em Destaque</h2>
            <p>Todas as empresas são rigorosamente analisadas por quem entende do mercado</p>
        </div>

        <div class="row">
            <?php for ($i=0; $i < 3; $i++) { ?>
                <div class="col-lg-4">
                    <a href="oferta-interna.php" class="oferta card shadow mt-4">
                        <div class="d-flex meta">
                            <div class="d-inline">
                                <span><i class="fas fa-star"></i> META Garantida na Rodada</span>
                            </div>
                        </div>
                        <img src="/assets/img/ofertas/wolf.png" class="card-img-top" alt="Wolf Coffee" title="Wolf Coffee">
                        <div class="card-body">
                            <div class="card-brand shadow">
                                <img src="/assets/img/ofertas/wolf_logo.png" alt="Wolf Coffee" title="Wolf Coffee">
                            </div>
                            <h3 class="card-title">Wolf Coffee</h3>
                            <p class="card-text">Uma startup destinada em servir os melhores cafés de Porto Alegre</p>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex">
                                <div class="box">
                                    <div class="chart" data-percent="75">75%<canvas></canvas></div>
                                </div>
                                <div class="d-inline oferta-info">
                                    <p class="text-blue">Investido: R$ 700,00</p>
                                    <p class="text-red">Garantia: R$ 333,33</p>
                                </div>
                            </div>

                            <div class="d-flex is_capturing">
                                <span class="d-inline">ainda captando</span>
                            </div>
                        </div>
                    </a>
                </div>
            <?php } ?>
            <?php for ($i=0; $i < 3; $i++) { ?>
                <div class="col-lg-4">
                    <a href="oferta-interna.php" class="oferta card shadow mt-4">
                        <img src="/assets/img/ofertas/wolf.png" class="card-img-top" alt="Wolf Coffee" title="Wolf Coffee">
                        <div class="card-body">
                            <div class="card-brand shadow">
                                <img src="/assets/img/ofertas/wolf_logo.png" alt="Wolf Coffee" title="Wolf Coffee">
                            </div>
                            <h3 class="card-title">Wolf Coffee</h3>
                            <p class="card-text">Uma startup destinada em servir os melhores cafés de Porto Alegre</p>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex">
                                <div class="box">
                                    <div class="chart" data-percent="75">75%<canvas></canvas></div>
                                </div>
                                <div class="d-inline oferta-info">
                                    <p class="text-blue">Alvo Máximo: R$ 300.000,00</p>
                                    <p class="text-blue">Investido: R$ 13.000,00</p>
                                    <p class="text-red">Garantia: R$ 1.333,33</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            <?php } ?>
        </div>
        <div class="d-flex mt-4">
            <a href="/quero-captar.php" title="Ver Mais" class="btn btn-vermais d-inline mx-auto">
                Ver Mais
                <div class="d-inline-block square"><i class="fas fa-long-arrow-alt-right"></i></div>
            </a>
        </div>
    </div>
</section>

<!--DEPOIMENTOS-->

<section class="wow slideInLeft" data-wow-duration="2s" id="depoimentos">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div id="video">
                    <div class="preview-video">
                        <a href="javascript:void(0)" class="video_preview" data-toggle="modal" data-target=".modalVideo2">
                            <img src="/assets/img/foto_vj_pattern.png" alt="Dr. João da Silva" title="Dr. João da Silva">
                            <div class="overlay">
                                <div>
                                    <div class="play">
                                        <i class="fas fa-play text-white"></i>
                                    </div>
                                    <p class="play-text text-white">APERTE O PLAY PARA CONHECER MAIS</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <svg class="Caminho_375" viewBox="119.738 -73.106 615.437 695.583">
                        <path fill="rgba(246,215,214,1)" id="Caminho_375" d="M 442.2153930664063 -73.10621643066406 C 505.3286743164063 -73.10621643066406 536.917724609375 -9.876947402954102 588.3456420898438 19.36474418640137 C 694.4686279296875 79.70550537109375 735.1754760742188 201.0425262451172 735.1754760742188 332.124267578125 C 735.1754760742188 526.3192138671875 487.9191284179688 622.4124755859375 293.7241821289063 622.4124755859375 C 290.4228515625 622.4124755859375 296.9515380859375 622.5567626953125 293.7241821289063 622.4124755859375 C 106.9826126098633 614.0654296875 119.9301910400391 428.0609741210938 119.9301910400391 237.1673278808594 C 119.9301910400391 136.9633178710938 208.2841339111328 111.5718536376953 267.8978271484375 58.2515869140625 C 323.9686279296875 8.100099563598633 348.2244873046875 -73.10621643066406 442.2153930664063 -73.10621643066406 Z">
                        </path>
                    </svg>
                </div>
            </div>
            <div class="col-lg-6">
                <div id="depoimentos_container">
                    <h2 class="text-right"><b>Depoimentos de</b><br>QUEM INVESTE</h2>
                    <div class="slide-depoimento">
                        <!-- Data-video e data-image servem para alterar a imagem/video ao trocar de depoimento -->
                        <div class="card pb-2" data-image="assets/img/foto_vj_pattern.png" data-video="https://www.youtube.com/embed/zpOULjyy-n8?rel=0&autoplay">
                            <img src="assets/img/Grupo45.png" class="left-arrow">
                            <div class="card-body">

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae aliquam libero. Nulla volutpat velit eu neque commodo porttitor. Nullam accumsan ornare tortor id laoreet. In malesuada ultrices lorem, porttitor suscipit tortor rhoncus vel.</p>


                                <div class="d-flex">
                                    <div class="d-inline">
                                        <h3 class="name">Dr. João da Silva</h3>
                                        <p class="text-blue">Investidor do projeto <b>Wolf Coffee</b></p>
                                    </div>
                                    <div class="d-inline ml-auto">
                                        <img src="assets/img/quote-left-solid.png" class="float-right">
                                    </div>
                                </div>

                            </div>
                        </div>

                        <!-- Data-video e data-image servem para alterar a imagem/video ao trocar de depoimento -->
                        <div class="card pb-2" data-image="assets/img/unnamed.jpg" data-video="https://www.youtube.com/embed/ytnD6UQKvV4?rel=0&autoplay">
                            <img src="assets/img/Grupo45.png" class="left-arrow">
                            <div class="card-body">

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae aliquam libero. Nulla volutpat velit eu neque commodo porttitor. Nullam accumsan ornare tortor id laoreet. In malesuada ultrices lorem, porttitor suscipit tortor rhoncus vel.</p>


                                <div class="d-flex">
                                    <div class="d-inline">
                                        <h3 class="name">Dr. João da Silva</h3>
                                        <p class="text-blue">Investidor do projeto <b>Wolf Coffee</b></p>
                                    </div>
                                    <div class="d-inline ml-auto">
                                        <img src="assets/img/quote-left-solid.png" class="float-right">
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!--Modal Dr João-->
                    <div class="modal fade modalVideo2" tabindex="-1" role="dialog" aria-labelledby="modalVideo2" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0&autoplay" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!--COMO COMEÇAR-->

        <div class="row" id="como_comecar">
            <div class="col-lg-12">
                <h2 class="text-blue font-weight-bold text-center">COMO COMEÇAR</h2>
            </div>
        </div>
        <div class="hto mx-auto">
            <div class="d-flex howto">
                <div class="line"></div>
                <div class="d-inline-block howto-item">
                    <div class="image-howto">
                        <img src="/assets/img/icon-processo.png" alt="Escolher" title="Escolher">
                    </div>
                    <h3 class="text-blue text-center font-weight-bold">Escolher</h3>
                    <p class="text-center howto-text">Escolha uma startup que você gosta. Revise o discurso da empresa, os termos e decida se você acredita que eles serão bem-sucedidos.</p>
                    <div class="d-flex">
                        <a class="btn btn-red mx-auto">Passo 1</a>
                    </div>
                </div>
                <div class="d-inline-block howto-item">
                    <div class="image-howto">
                        <img src="/assets/img/icon-investir1.png" alt="Investir" title="Investir">
                    </div>
                    <h3 class="text-blue text-center font-weight-bold">Investir</h3>
                    <p class="text-center howto-text">Invista uma pequena quantia para começar. Planeje diversificar, o que significa investir quantias menores em várias empresas.</p>
                    <div class="d-flex">
                        <a class="btn btn-red mx-auto">Passo 2</a>
                    </div>
                </div>
                <div class="d-inline-block howto-item">
                    <div class="image-howto">
                        <img src="/assets/img/icon-hand.png" alt="Acompanhe o Crescimento" title="Acompanhe o Crescimento">
                    </div>
                    <h3 class="text-blue text-center font-weight-bold">Acompanhe o Crescimento</h3>
                    <p class="text-center howto-text">Aguarde para ver se a inicialização foi bem-sucedida. Se a startup funcionar bem, seu investimento poderá trazer um retorno.</p>
                    <div class="d-flex">
                        <a class="btn btn-red mx-auto">Passo 3</a>
                    </div>
                </div>
            </div>

        </div>

    </div>

</section>

<!--MÍDIA-->

<section class="wow slideInLeft" data-wow-duration="2s" id="midia">
    <div class="container">
        <div class="row">
            <div class="col-lg-5 my-auto">
                <h2 class="font-weight-bold">Cluster21 na mídia</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae aliquam libero. Nulla volutpat velit eu neque commodo porttitor. Nullam accumsan ornare tortor id laoreet. In malesuada ultrices lorem, porttitor suscipit tortor rhoncus vel.</p>
                <a href="#" title="Ver Mais" class="btn btn-vermais mx-auto">
                    Ver Mais
                    <div class="d-inline-block square"><i class="fas fa-long-arrow-alt-right"></i></div>
                </a>
            </div>
            <div class="col-lg-7">
                <img class="img-fluid" src="/assets/img/print_reportagem_gaucha.png" alt="Cluster21 na mídia" title="Cluster21 na midia">
            </div>
        </div>
    </div>
</section>

<!--REGULAMENTAÇÃO-->

<section class="wow slideInLeft" data-wow-duration="2s" id="regulamentacao">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 pl-0 pr-0">
                <a href="javascript:void(0)" class="video_preview" data-toggle="modal" data-target=".modalVideo1">
                    <img src="/assets/img/img_vk_pattern.png" alt="Cluster21" title="Cluster21">
                    <div class="overlay">
                        <div>
                            <div class="play">
                                <i class="fas fa-play text-white"></i>
                            </div>
                            <p class="play-text text-white">APERTE O PLAY PARA CONHECER MAIS</p>
                        </div>
                    </div>
                </a>
                <div class="modal fade modalVideo1" tabindex="-1" role="dialog" aria-labelledby="modalVideo1" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0&autoplay" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 my-auto">
                <h2 class="font-weight-bold">Cluster21</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae aliquam libero. Nulla volutpat velit eu neque commodo porttitor. Nullam accumsan ornare tortor id laoreet. In malesuada ultrices lorem, porttitor suscipit tortor rhoncus vel.</p>
                <a href="#" title="Ver Mais" class="btn btn-vermais mx-auto">
                    Ver Mais
                    <div class="d-inline-block square"><i class="fas fa-long-arrow-alt-right"></i></div>
                </a>
                <hr class="mb-4 mt-4">
                <div class="d-flex" style="height: auto">
                    <img class="d-inline-block" style="width: 100px" src="/assets/img/logocvm_color.png" alt="Você está SEGURO! Somos regulados pela CVM 588.">
                    <p class="d-inline ml-1 text-blue my-auto"><b>Você está </b>SEGURO <br>
                Somos regulados pela CVM 588.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!--PARCEIROS-->

<section class="wow slideInLeft" data-wow-duration="2s" id="parceiros">
    <div class="container">
        <h2 class="font-weight-bold text-center title">Conheça nossos parceiros</h2>
        <div class="w-75 mx-auto">
            <ul class="customTab">
                <?php
                    $arr = ['one','two','three'];
                    foreach ($arr as $i=>$item) {
                        ?>
                        <li class="clickme">
                            <a href="javascript:void(0);" data-tag="<?=$item;?>" class="<?=($i===0)?'activelink':'';?>">
                                <img src="/assets/img/logo_lactec_uk.png" alt="Lactec">
                            </a>
                            <img src="/assets/img/Poligono2.png" class="selected-tab">
                        </li>
                        <?php
                    }
                ?>
            </ul>
            <div style="clear: both;"></div>
            <div id="container">
                <div class="list" id="one">
                    <div class="card border">
                        <div class="card-body">
                            <h2 class="text-center text-blue font-weight-bold">Lactec</h2>
                            <p>Aqui, a inovação está presente em cada projeto, em cada serviço que prestamos. Isso é ser inovador.
                                <br>
                                <br>
                                O Lactec é um dos maiores centros de ciência e tecnologia do país, referência em soluções inovadoras para o segundo setor – como empresas, indústrias e concessionárias de energia.
                                <br>
                                <br>
                                Possui cinco unidades em Curitiba (PR) e uma em Salvador (BA), nas quais abriga seu corpo técnico qualificado e multidisciplinar e sua rede de laboratórios próprios. São pesquisadores, técnicos, engenheiros, professores, consultores e funcionários administrativos preparados para buscar resultados de excelência para os mais diversos segmentos.</p>
                        </div>
                    </div>
                </div>
                <div class="list hide" id="two">
                    <div class="card border">
                        <div class="card-body">
                            <h2 class="text-center text-blue font-weight-bold">Lactec</h2>
                            <p>Aqui, a inovação está presente em cada projeto, em cada serviço que prestamos. Isso é ser inovador.
                                <br>
                                <br>
                                O Lactec é um dos maiores centros de ciência e tecnologia do país, referência em soluções inovadoras para o segundo setor – como empresas, indústrias e concessionárias de energia.
                                <br>
                                <br>
                                Possui cinco unidades em Curitiba (PR) e uma em Salvador (BA), nas quais abriga seu corpo técnico qualificado e multidisciplinar e sua rede de laboratórios próprios. São pesquisadores, técnicos, engenheiros, professores, consultores e funcionários administrativos preparados para buscar resultados de excelência para os mais diversos segmentos.</p>
                        </div>
                    </div>
                </div>
                <div class="list hide" id="three">
                    <div class="card border">
                        <div class="card-body">
                            <h2 class="text-center text-blue font-weight-bold">Lactec</h2>
                            <p>Aqui, a inovação está presente em cada projeto, em cada serviço que prestamos. Isso é ser inovador.
                                <br>
                                <br>
                                O Lactec é um dos maiores centros de ciência e tecnologia do país, referência em soluções inovadoras para o segundo setor – como empresas, indústrias e concessionárias de energia.
                                <br>
                                <br>
                                Possui cinco unidades em Curitiba (PR) e uma em Salvador (BA), nas quais abriga seu corpo técnico qualificado e multidisciplinar e sua rede de laboratórios próprios. São pesquisadores, técnicos, engenheiros, professores, consultores e funcionários administrativos preparados para buscar resultados de excelência para os mais diversos segmentos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!--DÚVIDA-->

<section class="wow slideInLeft" data-wow-duration="2s" id="duvida" class="mt-4">
        <h2 class="font-weight-bold text-center">Ficou com alguma dúvida?</h2>
        <h2 class="text-center">Conheça nossas Perguntas frequentes</h2>
        <div class="container-faq">
            <div class="p-freq d-flex">
                    <?php
                        for($i=0;$i<8;$i++){
                            ?>
                            <div class="card d-inline-block bg-light pl-2 pb-2 pt-3 m- bv1">
                                    <h3>Lorem Ipsum is simply dummy is simply</h3>
                                <div class="read-container">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                </div>
                                <div class="text-center">
                                    <a href="javascript:void(0)" class="text-red font-weight-bold mt-1 mb-2 read-more">Leia mais</a>
                                </div>
                            </div>
                            <?php
                        }
                    ?>
            </div>
        </div>
        <p class="text-center mt-3">Ainda está com alguma dúvida? <a class="text-red font-weight-bold" href="">Clique aqui</a> que respondemos agora mesmo.</p>
</section>

<?php
include 'inc/rodape.php';
?>