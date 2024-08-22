const sobre = document.querySelector("#about");

const formulario = document.querySelector('#formulario');

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

async function getApiGithub() {
  try {
    const dadosPerfil = await fetch (`https://api.github.com/users/Matheus-Leamdrim`);
    const perfil = await dadosPerfil.json();

    let conteudo = `
          <img class="sobre_container_img" src="${perfil.avatar_url}"
          alt="Foto do Perfil do Github - ${perfil.name}" width="325px">
  
          <article id="sobre_texto" class = "flex sobre_texto">
          <h1 class="sobre_container_h1">Quem sou eu?</h1>
          <p class="sobre_container_p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam odit voluptates incidunt
              inventore rem error harum blanditiis accusamus vitae, minus fugit consequatur? Dolorum maiores magni
              deleniti modi sit laudantium totam!
          </p>
  
          <div id="sobre_github" class="flex sobre_github">
              <a class="botao" target="_blank" href="${perfil.html_url}">Github</a>
              <p class="sobre_github_itens">${perfil.followers} Seguidores</p>
              <p class="sobre_github_itens">${perfil.public_repos} Repositórios</p>
          </div>
  
          </article>
      `

    sobre.innerHTML = conteudo;
  } catch (error) {
    console.log(error);
  }
}

formulario.addEventListener('submit', function(event) {
  
  event.preventDefault();

  const campoEmail = document.querySelector('#email');
  const txtEmail = document.querySelector('#txtEmail');

  if (!campoEmail.value.match(emailRegex)) {
    txtEmail.innerHTML = 'Digite um E-mail válido.';
    campoEmail.focus();
    return;
  }else{
    txtEmail.innerHTML = '';
  }

  formulario.submit();

});

getApiGithub();