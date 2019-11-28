import React from 'react';
import {Route, BrowserRouter, Switch, Link} from 'react-router-dom';
import Cadastro from '../cadastro/Cadastro';
import Login from '../login/Login';
import './home.css';

function Home() {
  return (
    <div>
      <div id="wrapper">
    <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0" styles="background-image: url('../images/madeira.png');opacity: 0.76;background-size: contain;">
        <div class="container-fluid d-flex flex-column p-0">
            <a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                <div class="sidebar-brand-icon rotate-n-15 fas fa-fish fa-lg"></div>
                <div class="sidebar-brand-text mx-3"><span>FISHING FISH</span></div>
            </a>
            <hr class="sidebar-divider my-0" />
            <ul class="nav navbar-nav text-light" id="accordionSidebar">
                <li class="nav-item" role="presentation"><a class="nav-link active" href="/Home">
                  <i class="fas fa-tachometer-alt fas fa-home"></i>
                  <span>Página Inicial</span>
                  </a>
                </li>

                <li class="nav-item" role="presentation">
                  <a class="nav-link active" href="index.html">
                    <i class="fa fa-th-large">
                  </i><span>Feed</span></a>
                
                <a class="nav-link active" href="/login">
                  <i class="fas fa-tachometer-alt fas fa-user"></i>
                    <span>Login</span>
                </a>
                <a class="nav-link active" href="/perfil">
                  <i class="fas fa-tachometer-alt fas fa-user"></i>
                    <span>Perfil</span>
                </a>
                <a class="nav-link active" href="/imageupload">
                  <i class="fas fa-tachometer-alt fas fa-user"></i>
                    <span>Upload de Fotos</span>
                </a>
                <a class="nav-link active" href="/cadastro"><i class="fa fa-gears"></i>
                  <span>Cadastre-se</span>
                  </a>
                  
                  
                  <a class="nav-link active" href="/index.html">
                  <i class="fa fa-sign-out"></i>
                  <span>Sair</span></a></li>
            </ul>
            <div class="text-center d-none d-md-inline"><button class="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
        </div>
    </nav>
    <div class="d-flex flex-column" id="content-wrapper">
        <div id="content">
            <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                <div class="container-fluid"><button class="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button"><i class="fas fa-bars"></i></button>
                    <form class="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div class="input-group"><input class="bg-light form-control border-0 small" type="text" placeholder="Pesquisar" />
                            <div class="input-group-append"><button class="btn btn-primary py-0" type="button" styles="background-color: #c6805b;"><i class="fas fa-search"></i></button></div>
                        </div>
                    </form>
                    <ul class="nav navbar-nav flex-nowrap ml-auto">
                        <li class="nav-item dropdown d-sm-none no-arrow"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><i class="fas fa-search"></i></a>
                            <div class="dropdown-menu dropdown-menu-right p-3 animated--grow-in" role="menu" aria-labelledby="searchDropdown">
                                <form class="form-inline mr-auto navbar-search w-100">
                                    <div class="input-group"><input class="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                                        <div class="input-group-append"><button class="btn btn-primary py-0" type="button"><i class="fas fa-search"></i></button></div>
                                    </div>
                                </form>
                            </div>
                        </li>
                        <li class="nav-item dropdown no-arrow mx-1" role="presentation">
                            <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"></a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in" role="menu">
                                    <h6 class="dropdown-header">alerts center</h6>
                                    <a class="d-flex align-items-center dropdown-item" href="#">
                                        <div class="mr-3">
                                            <div class="bg-primary icon-circle"><i class="fas fa-file-alt text-white"></i></div>
                                        </div>
                                        <div><span class="small text-gray-500">December 12, 2019</span>
                                            <p>A new monthly report is ready to download!</p>
                                        </div>
                                    </a>
                                    <a class="d-flex align-items-center dropdown-item" href="#">
                                        <div class="mr-3">
                                            <div class="bg-success icon-circle"><i class="fas fa-donate text-white"></i></div>
                                        </div>
                                        <div><span class="small text-gray-500">December 7, 2019</span>
                                            <p>$290.29 has been deposited into your account!</p>
                                        </div>
                                    </a>
                                    <a class="d-flex align-items-center dropdown-item" href="#">
                                        <div class="mr-3">
                                            <div class="bg-warning icon-circle"><i class="fas fa-exclamation-triangle text-white"></i></div>
                                        </div>
                                        <div><span class="small text-gray-500">December 2, 2019</span>
                                            <p>Spending Alert: We&#39;ve noticed unusually high spending for your account.</p>
                                        </div>
                                    </a><a class="text-center dropdown-item small text-gray-500" href="#">Show All Alerts</a></div>
                            </div>
                        </li>
                        <li class="nav-item dropdown no-arrow mx-1" role="presentation">
                            <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"></a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in" role="menu">
                                    <h6 class="dropdown-header">alerts center</h6>
                                    <a class="d-flex align-items-center dropdown-item" href="#">
                                        <div class="dropdown-list-image mr-3"><img class="rounded-circle" src="../images/avatar4.jpeg" />
                                            <div class="bg-success status-indicator"></div>
                                        </div>
                                        <div class="font-weight-bold">
                                            <div class="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I&#39;ve been having.</span></div>
                                            <p class="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                                        </div>
                                    </a>
                                    <a class="d-flex align-items-center dropdown-item" href="#">
                                        <div class="dropdown-list-image mr-3"><img class="rounded-circle" src="../images/avatar2.jpeg" />
                                            <div class="status-indicator"></div>
                                        </div>
                                        <div class="font-weight-bold">
                                            <div class="text-truncate"><span>I have the photos that you ordered last month!</span></div>
                                            <p class="small text-gray-500 mb-0">Jae Chun - 1d</p>
                                        </div>
                                    </a>
                                    <a class="d-flex align-items-center dropdown-item" href="#">
                                        <div class="dropdown-list-image mr-3"><img class="rounded-circle" src="../images/avatar3.jpeg" />
                                            <div class="bg-warning status-indicator"></div>
                                        </div>
                                        <div class="font-weight-bold">
                                            <div class="text-truncate"><span>Last month&#39;s report looks great, I am very happy with the progress so far, keep up the good work!</span></div>
                                            <p class="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
                                        </div>
                                    </a>
                                    <a class="d-flex align-items-center dropdown-item" href="#">
                                        <div class="dropdown-list-image mr-3"><img class="rounded-circle" src="../images/avatar5.jpeg" />
                                            <div class="bg-success status-indicator"></div>
                                        </div>
                                        <div class="font-weight-bold">
                                            <div class="text-truncate"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren&#39;t good...</span></div>
                                            <p class="small text-gray-500 mb-0">Chicken the Dog · 2w</p>
                                        </div>
                                    </a><a class="text-center dropdown-item small text-gray-500" href="#">Show All Alerts</a></div>
                            </div>
                            <div class="shadow dropdown-list dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown"></div>
                        </li>
                        <div class="d-none d-sm-block topbar-divider"></div>
                        <li class="nav-item dropdown no-arrow" role="presentation">
                            <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><span class="d-none d-lg-inline mr-2 text-gray-600 small">Anônimo</span><img class="border rounded-circle img-profile" src="../images/avatarfeminino.jpg" /></a>
                                <div
                                    class="dropdown-menu shadow dropdown-menu-right animated--grow-in" role="menu"><a class="dropdown-item" role="presentation" href="#"><i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i> Profile</a><a class="dropdown-item" role="presentation" href="#"><i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i> Settings</a>
                                    <a
                                        class="dropdown-item" role="presentation" href="#"><i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i> Activity log</a>
                                        <div class="dropdown-divider"></div><a class="dropdown-item" role="presentation" href="#"><i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i> Logout</a></div>
                </div>
                </li>
                </ul>
        </div>
        </nav>
        <div class="container-fluid">
            <div class="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 class="text-dark mb-0">Página Inicial</h3>
            </div>
            <div class="row">
                <div class="col-lg-7 col-xl-8 col-lg-10 col-xl-10" styles="display: block;margin-left: auto;margin-right: auto;">
                    <div class="card shadow mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h6 class="text-primary font-weight-bold m-0" styles="color: #c17e5a!important;">Onde pescar?</h6>
                        </div>
                        <div class="card-body"><iframe allowfullscreen frameborder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBY4vGMxaEmqAAXC9ozsDNFr52DDjy3J-s&amp;q=Brazil&amp;zoom=4" width="100%" height="600"></iframe>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="intro">
                <h2 class="text-center" styles="margin-bottom: 67px;">Torneios e Workshops</h2>
            </div>
            <div class="row justify-content-center features">
                <div class="col-sm-6 col-md-5 col-lg-4 item" styles="margin-bottom: 35px;"><img src="logo-torneio-pesca-esportiva-figueiredo.jpg" styles="width: 245px;" />
                    <div class="box">
                        <h3 class="name">Torneio pesca esportiva</h3>
                        <p class="description">Regras do torneio: </p>
                        <p class="description">- Medição do peixe é feita com a régua dada no dia do evento.</p>
                    </div><a class="learn-more" href="#">Ler mais »</a></div>
                <div class="col-sm-6 col-md-5 col-lg-4 item" styles="margin-bottom: 35px;"><img src="logo-torneio-pesca-esportiva-figueiredo.jpg" styles="width: 245px;" />
                    <div class="box">
                        <h3 class="name">Torneio pesca esportiva</h3>
                        <p class="description">Regras do torneio: </p>
                        <p class="description">- Medição do peixe é feita com a régua dada no dia do evento.</p>
                    </div><a class="learn-more" href="#">Ler mais »</a></div>
                <div class="col-sm-6 col-md-5 col-lg-4 item" styles="margin-bottom: 35px;"><img src="logo-torneio-pesca-esportiva-figueiredo.jpg" styles="width: 245px;" />
                    <div class="box">
                        <h3 class="name">Torneio pesca esportiva</h3>
                        <p class="description">Regras do torneio: </p>
                        <p class="description">- Medição do peixe é feita com a régua dada no dia do evento.</p>
                    </div><a class="learn-more" href="#">Ler mais »</a></div>
                <div class="col-sm-6 col-md-5 col-lg-4 item" styles="margin-bottom: 35px;"><img src="logo-torneio-pesca-esportiva-figueiredo.jpg" styles="width: 245px;" />
                    <div class="box">
                        <h3 class="name">Torneio pesca esportiva</h3>
                        <p class="description">Regras do torneio: </p>
                        <p class="description">- Medição do peixe é feita com a régua dada no dia do evento.</p>
                    </div><a class="learn-more" href="#">Ler mais »</a></div>
                <div class="col-sm-6 col-md-5 col-lg-4 item" styles="margin-bottom: 35px;"><img src="logo-torneio-pesca-esportiva-figueiredo.jpg" styles="width: 245px;" />
                    <div class="box">
                        <h3 class="name">Torneio pesca esportiva</h3>
                        <p class="description">Regras do torneio: </p>
                        <p class="description">- Medição do peixe é feita com a régua dada no dia do evento.</p>
                    </div><a class="learn-more" href="#">Ler mais »</a></div>
                <div class="col-sm-6 col-md-5 col-lg-4 item" styles="margin-bottom: 35px;"><img src="logo-torneio-pesca-esportiva-figueiredo.jpg" styles="width: 245px;" />
                    <div class="box">
                        <h3 class="name">Torneio pesca esportiva</h3>
                        <p class="description">Regras do torneio: </p>
                        <p class="description">- Medição do peixe é feita com a régua dada no dia do evento.</p>
                    </div><a class="learn-more" href="#">Ler mais »</a></div>
            </div>
        </div>
    </div>
    <footer class="bg-white sticky-footer" styles="background-color: #f8f9fc;padding: 0px;">
        <footer id="myFooter" styles="background-color: rgb(255,255,255);">
            <div class="container-fluid" styles="padding: 0px;">
                <div class="row social-networks" styles="background-color: #f8f9fc;">
                    <div class="col"><a class="facebook" href="https://facebook.com/" target="_blank"><i class="fa fa-facebook" styles="color: rgb(24, 119, 242);"></i></a><a class="twitter" href="https://twitter.com/" target="_blank"><i class="fa fa-twitter" styles="color: rgb(29, 161, 242);"></i></a>
                        <a
                            class="google" href="https://plus.google.com/" target="_blank"><i class="fa fa-google-plus" styles="color: rgb(255, 0, 0);"></i></a><a class="linkedin" href="https://linkedin.com/" target="_blank"><i class="fa fa-linkedin" styles="color: #007BB6;"></i></a></div>
                </div>
            </div>
        </footer>
    </footer>
</div><a class="border rounded d-inline scroll-to-top" href="#page-top"><i class="fas fa-angle-up"></i></a></div>

    
    </div>
    );
}

export default Home;
