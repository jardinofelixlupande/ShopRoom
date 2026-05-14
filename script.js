const produtos = [
  /* ---------- ELECTRÓNICA ---------- */
  {
    nome: "Fone de Ouvido Bluetooth TWS Sem Fio com Controle por Toque e Longa Duração de Bateria para Android, iOS e PC",
    category: "electronica",
    preco: "4.05",
    precoAntigo: "17.13",
    desconto: `-${Math.round(((17.13 - 4.05) / 17.13) * 100)}%`, // Calcula o desconto real
    avaliacao: "★★★★★ 4.9",
    imagem: "img/blueth.png",
    link: "https://pt.aliexpress.com/item/1005010089241070.html?spm=a2g0o.productlist.main.6.455dtd1ttd1tO5&algo_pvid=2032f752-ae30-49c8-b7c3-31bf648814c2&algo_exp_id=2032f752-ae30-49c8-b7c3-31bf648814c2-5&pdp_ext_f=%7B%22order%22%3A%223812%22%2C%22eval%22%3A%221%22%2C%22orig_sl_item_id%22%3A%221005010089241070%22%2C%22orig_item_id%22%3A%221005010758342979%22%2C%22fromPage%22%3A%22search%22%7D&pdp_npi=6%40dis%21USD%2117.13%214.05%21%21%21115.72%2127.36%21%402141122217786746570626434ebc75%2112000051099136908%21sea%21MZ%210%21ABX%211%210%21n_tag%3A-29910%3Bd%3Ad05a6a96%3Bm03_new_user%3A-29895%3BpisId%3A5000000204878087&curPageLogUid=DL0hVWOUICgJ&utparam-url=scene%3Asearch%7Cquery_from%3A%7Cx_object_id%3A1005010089241070%7C_p_origin_prod%3A1005010758342979",
  },
  {
    nome: "Anel multifuncional inteligente de aço inoxidável para Vestuariol, sensação de humor, anéis sensíveis à temperatura, joias à prova d'água",
    category: "electronica",
    preco: Number(0.38),
    precoAntigo: Number(0.65),
    desconto: `-${Math.round(((0.65 - 0.38) / 0.65) * 100)}%`, // Calcula o desconto real
    avaliacao: "★★★★☆ 4.4",
    imagem: "img/anel.png",
    link: "https://pt.aliexpress.com/item/1005006015733948.html?spm=a2g0o.home.pcJustForYou.22.25903f40R7HDhW&gps-id=pcJustForYou&scm=1007.13562.416251.0&scm_id=1007.13562.416251.0&scm-url=1007.13562.416251.0&pvid=938423d6-017b-43ad-85b1-ec13b85fe7bd&_t=gps-id%3ApcJustForYou%2Cscm-url%3A1007.13562.416251.0%2Cpvid%3A938423d6-017b-43ad-85b1-ec13b85fe7bd%2Ctpp_buckets%3A668%232846%238110%231995&pdp_ext_f=%7B%22order%22%3A%227574%22%2C%22spu_best_type%22%3A%22price%22%2C%22eval%22%3A%221%22%2C%22sceneId%22%3A%223562%22%2C%22fromPage%22%3A%22recommend%22%7D&pdp_npi=6%40dis%21USD%210.65%210.38%21%21%210.65%210.38%21%400b15834e17786699279436259e1285%2112000035334543705%21rec%21MZ%21%21ABX%211%210%21n_tag%3A-29910%3Bd%3A70067e7b%3Bm03_new_user%3A-29895&utparam-url=scene%3ApcJustForYou%7Cquery_from%3A%7Cx_object_id%3A1005006015733948%7C_p_origin_prod%3A",
  },
  {
    nome: "Liquidificador doméstico espremedor de leite de soja máquina de quebrar parede comercial máquina de lama auxiliar máquina de alimentos máquina de suco",
    category: "electronica",
    preco: "17.98",
    precoAntigo: "33.30",
    desconto: `-${Math.round(((33.3 - 17.98) / 33.3) * 100)}%`,
    avaliacao: "★★★★☆ 4.3",
    imagem: "img/liquidificador.png",
    link: "https://pt.aliexpress.com/item/1005008370928863.html?spm=a2g0o.categorymp.prodcutlist.3.3abeFUMeFUMe5B&pdp_ext_f=%7B%22sku_id%22%3A%2212000044753997892%22%7D&utparam-url=scene%3Asearch%7Cquery_from%3Acategory_navigate_newTab2%7Cx_object_id%3A1005008370928863%7C_p_origin_prod%3A&_gl=1*ftz0fk*_gcl_au*MTQ1NTcwNjEuMTc3ODY2OTkzOQ..*_ga*MjA2NTc5NjEzNC4xNzc4NjY5OTQx*_ga_VED1YSGNC7*czE3Nzg2NzMzMzIkbzIkZzAkdDE3Nzg2NzMzMzIkajYwJGwwJGgw",
  },

  /* ---------- Vestuario ---------- */
  {
    nome: "Luvas de goleiro de futebol WVVOU para adultos e jovens, luvas de goleiro de alto desempenho com 5 dedos desempenho com 5 dedos destacáveis",
    category: "Vestuario",
    preco: "36.31",
    precoAntigo: "91.26",
    desconto: `-${Math.round(((91.26 - 36.31) / 91.26) * 100)}%`,
    avaliacao: "★★★★★ 4.7",
    imagem: "img/luva.png",
    link: "https://pt.aliexpress.com/item/1005006325764168.html?sourceType=562&pvid=4290ba98-3677-49b8-9cb3-e81d5a841fd8&pdp_ext_f=%7B%22ship_from%22%3A%22CN%22%2C%22sku_id%22%3A%2212000036770721697%22%7D&scm=1007.28480.422277.0&scm-url=1007.28480.422277.0&scm_id=1007.28480.422277.0&pdp_npi=6%40dis%21USD%21US+%2491.26%21US+%2436.31%21%21%21616.59%21245.28%21%400b88a95617786756743676703e0fd7%2112000036770721697%21dsg%21MZ%21%21X%211%210%21c%3A562&spm=a2g0o.tm1000029706.8287340260.d0&aecmd=true",
  },
  {
    nome: "Em construção",
    category: "Vestuario",
    preco: "Preço",
    precoAntigo: "old price" /* sem preço antigo */,
    desconto: "-100%" /* sem badge */,
    avaliacao: "★★★★★ 5.0",
    imagem: "img/wait.jpeg", //Link por pôr futuramente
    link: "",
  },

  /* ---------- MODA ---------- */
  {
    nome: "Em construção...",
    category: "Moda",
    preco: "Preço",
    precoAntigo: "old price",
    desconto: "-100%",
    avaliacao: "★★★★★ 4.9",
    imagem: "img/wait.jpeg", //Link por pôr futuramente
    link: "",
  },
  {
    nome: "Em construção...",
    category: "Moda",
    preco: "Preço",
    precoAntigo: "old price",
    desconto: "-100%",
    avaliacao: "★★★★☆ 4.4",
    imagem: "img/wait.jpeg", //Link por pôr futuramente
    link: "",
  },

  /* ---------- BELEZA ---------- */
  {
    nome: "Em construção...",
    category: "Beleza",
    preco: "Preço",
    precoAntigo: "old price",
    desconto: "-100%",
    avaliacao: "★★★★☆ 4.2",
    imagem: "img/wait.jpeg", //Link por pôr futuramente
    link: "",
  },

  /* ---------- DESPORTO ---------- */
  {
    nome: "Em construção...",
    category: "Desporto",
    preco: "Preço",
    precoAntigo: "old price",
    desconto: "-100%",
    avaliacao: "★★★★★ 4.6",
    imagem: "img/wait.jpeg", //Link por pôr futuramente
    link: "",
  },
  {
    nome: "Em construção...",
    category: "Desporto",
    preco: "Preço",
    precoAntigo: "old price",
    desconto: "-100%",
    avaliacao: "★★★★★ 4.6",
    imagem: "img/wait.jpeg", //Link por pôr futuramente
    link: "",
  },
]; /* fim do array de produtos */

/* =============================================================
       FUNÇÃO: criar um cartão HTML para cada produto
    ============================================================= */
function criarCartao(produto) {
  /* Cria o elemento <a> que envolve o cartão inteiro */
  const link = document.createElement("a");
  link.href = produto.link; /* URL do AliExpress */
  link.target = "_blank"; /* abre em nova aba */
  link.rel = "noopener noreferrer"; /* segurança */
  link.classList.add("cartao");

  /* Badge de desconto */
  const badgeHTML = produto.desconto
    ? `<span class="badge-desconto">${produto.desconto}</span>`
    : "";

  /* Preço antigo riscado */
  const precoAntigoHTML = produto.precoAntigo
    ? `<span class="cartao-preco-antigo">$${produto.precoAntigo}</span>`
    : "";

  /* Monta o HTML interno do cartão */
  link.innerHTML = `
        <div class="cartao-wrapper">
          <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy"
               onerror="this.src='https://via.placeholder.com/300x200?text=Sem+Imagem'"/>
          ${badgeHTML}
        </div>
        <div class="cartao-info">
          <div class="cartao-category">${produto.category}</div>
          <div class="cartao-nome">${produto.nome}</div>
          <div class="cartao-preco-linha">
            <span class="cartao-preco">$${produto.preco}</span>
            ${precoAntigoHTML}
          </div>
          <div class="cartao-avaliacao">${produto.avaliacao}</div>
        </div>
        <div class="btn-ver">Ver Oferta no AliExpress →</div>
      `;

  return link; /* devolve o elemento pronto */
}

/* =============================================================
       RENDERIZAR TODOS OS PRODUTOS NA PÁGINA
       Percorre o array "produtos" e coloca cada cartão na grade.
    ============================================================= */
function renderizarProdutos() {
  const grade = document.getElementById("grade-produtos");
  grade.innerHTML = ""; /* limpa antes de renderizar */

  produtos.forEach(function (produto) {
    const cartao = criarCartao(produto);
    grade.appendChild(cartao);
  });
}

/* Chama a função quando a página carrega */
renderizarProdutos();

function normalizarTexto(texto) {
  return texto
    .toLowerCase() // Converte para minúsculas
    .normalize("NFD") // Remove acentos
    .replace(/[\u0300-\u036f]/g, ""); // Remove marcas diacríticas
}
/* =============================================================
       FUNÇÃO: PESQUISAR PRODUTOS
    ============================================================= */
const barraPesquisa = document.getElementById("barra-pesquisa");

barraPesquisa.addEventListener("input", function () {
  const textoPesquisa = normalizarTexto(this.value); // Texto digitado pelo usuário
  const grade = document.getElementById("grade-produtos");
  grade.innerHTML = ""; // Limpa a grade de produtos

  const filtrados = produtos.filter((produto) =>
    normalizarTexto(produto.nome).includes(textoPesquisa)
  ); // Filtra os produtos cujo nome contém o texto pesquisado

  filtrados.forEach((p) => grade.appendChild(criarCartao(p))); // Renderiza os produtos filtrados
});
/* =============================================================
       BOTÕES DE category — destaca o botão clicado
       (Para filtrar produtos por category, descomente o código abaixo)
    ============================================================= */
const botoesCat = document.querySelectorAll(".btn-category");

botoesCat.forEach(function (botao) {
  botao.addEventListener("click", function () {
    /* Remove a classe "ativo" de todos os botões */
    botoesCat.forEach((b) => b.classList.remove("ativo"));

    /* Adiciona "ativo" apenas no botão clicado */
    this.classList.add("ativo");

    /* --- FILTRO REAL --- */
    const categoryEscolhida = normalizarTexto(
      this.getAttribute("data-category")
    );
    const grade = document.getElementById("grade-produtos");
    grade.innerHTML = ""; // Limpa apenas a grade de produtos

    const filtrados =
      categoryEscolhida === "todos"
        ? produtos // Mostra todos os produtos se "todos" for selecionado
        : produtos.filter(
            (p) => normalizarTexto(p.category) === categoryEscolhida
          ); // Filtra pela categoria

    filtrados.forEach((p) => grade.appendChild(criarCartao(p))); // Renderiza os produtos filtrados
  });
});
