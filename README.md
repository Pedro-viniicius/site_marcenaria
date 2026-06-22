# Queiroz Marcenaria e Carpintaria — Site

Site institucional estático (HTML + CSS + JavaScript, sem dependências de build)
da Queiroz Marcenaria e Carpintaria, em São Sebastião do Paraíso (MG).

## Estrutura

```
queiroz-marcenaria-site/
├── index.html
├── css/styles.css
├── js/main.js
├── favicon.ico
└── assets/
    └── images/
        ├── logo-queiroz.png
        ├── logo-queiroz-cream.png
        ├── og-image.jpg
        ├── favicon-32.png
        ├── favicon-180.png
        └── inspiracoes/                 (imagens conceituais geradas por IA)
            └── README-imagens-ia.md
```

Para visualizar, basta abrir `index.html` no navegador (ou servir a pasta com
qualquer servidor estático).

## Link do endereço (Google Maps)

O endereço exibido no rodapé é **clicável** e abre o Google Maps em uma **nova
aba** (`target="_blank"` com `rel="noopener"`). Logo abaixo do endereço há um
atalho **"Ver localização no Google Maps"**, e o mesmo atalho também aparece na
seção de contato/CTA final.

- O texto do endereço continua **legível** mesmo sem clicar.
- O link usa o formato oficial de busca do Google Maps:
  `https://www.google.com/maps/search/?api=1&query=<endereço-codificado>`
- Endereço usado:
  `R. Soares Neto, 1023 - Vila Savigny Soares, São Sebastião do Paraíso - MG, CEP 37950-056`

### Como testar o link do Maps

1. Abra o `index.html` no navegador.
2. Role até o rodapé (ou até a seção de contato no final da página).
3. Clique no endereço ou no botão **"Ver localização no Google Maps"**.
4. Deve abrir uma nova aba no Google Maps já buscando o endereço da marcenaria.

## Imagens de inspiração geradas por IA (seção "O que fazemos")

A seção de serviços (`#servicos`) tem espaço para uma imagem em cada cartão.

> As imagens são **referências conceituais geradas por IA**, usadas apenas para
> ilustrar possibilidades de projeto. **Não representam trabalhos reais já
> executados.** Há uma nota discreta no site informando isso.

### Onde colocar as imagens

Salve os arquivos em:

```
assets/images/inspiracoes/
```

### Nomes de arquivo esperados (exatos)

| Serviço                              | Arquivo                                  |
| ------------------------------------ | ---------------------------------------- |
| Móveis de madeira sob medida         | `moveis-sob-medida-ia.jpg`               |
| Reformas e restaurações em madeira   | `restauracao-madeira-ia.jpg`             |
| Portas, janelas e carpintaria        | `portas-janelas-carpintaria-ia.jpg`      |
| Bancadas, mesas e peças especiais    | `bancadas-mesas-madeira-ia.jpg`          |
| Projetos personalizados              | `projeto-personalizado-madeira-ia.jpg`   |
| Ajustes, manutenção e acabamento     | `manutencao-madeira-ia.jpg`              |

### Comportamento automático

- Enquanto o arquivo **não existir**, o cartão mostra um **espaço reservado**
  elegante com o texto: *"Imagem conceitual gerada por IA — substituir pelo
  arquivo final"*. O layout **não quebra**.
- Quando o arquivo for salvo com o nome exato acima, a imagem aparece
  automaticamente no lugar do espaço reservado — **sem precisar editar o HTML**.
- Se uma imagem existir mas falhar ao carregar, o `js/main.js` esconde a imagem
  quebrada e mantém o espaço reservado.

Os **prompts prontos** (em inglês) para gerar cada imagem estão em
[`assets/images/inspiracoes/README-imagens-ia.md`](assets/images/inspiracoes/README-imagens-ia.md).

### Como substituir por fotos reais depois

1. Tire a foto real do trabalho.
2. Renomeie o arquivo com **exatamente** o nome esperado da tabela acima.
3. Salve em `assets/images/inspiracoes/` (substituindo o conceito de IA).
4. Quando todas as imagens forem fotos reais, remova do `index.html` a nota
   "As imagens desta seção são referências conceituais geradas por IA..." para
   refletir que passaram a ser trabalhos reais.

## Observações de manutenção

- Não foram adicionados nomes de clientes, prêmios ou depoimentos reais.
- A identidade visual rústica-premium (bege, marrom madeira, marrom escuro,
  off-white e tons neutros) foi preservada.
