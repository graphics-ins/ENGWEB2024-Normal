# Resolucao do teste

Nome: Inês Meneses de Castro
Número: 95458

## Exercicio 1

### 1.1

Primeiramente passamos o dataset contratos2024.csv para o formato json.
O dataset foi alterado de modo a que o campo "idcontrato" passe a ser "_id". Assim como havendo incoerencias no tipo de dados de precoContratutal, passamos tudo para number com o precosConvert.py.
De seguida o dataset deve ser importado para o MongoDB com o seguinte comando:
mongoimport --host localhost --db contratos --collection contratos  --file contratos2024.json --jsonArray
Tendo o cuidado de ver so o import foi bem sucedido:
36377 document(s) imported successfully. 0 document(s) failed to import.

### 1.2


0. Entrar na base de dados com o comando:
use contratos

1. db.plantas.count()
Resposta: 36377

2. db.contratos.find({"tipoprocedimento" : "Ajuste Direto Regime Geral"}).count()
Resposta: 17067

3. db.contratos.distinct("entidade_comunicante").sort()
Resposta:
[
  'A ARCIAL - Associação para Recuperação de Cidadãos Inadaptados de Oliveira do Hospital',
  'A Oficina Centro de Artes e Mesteres Tradicionais de Guimarães, CIPRL',
  'A. D. A. M. - Águas do Alto Minho, S. A.',
  'ABIMOTA - Associação Nacional das Indústrias de Duas Rodas, Ferragens, Mobiliário e Afins',
  'ABMG - Águas do Baixo Mondego e Gândara, E. I. M., S. A.',
  'AC, Águas de Coimbra, E. M.',
  'ACA - Associação Casa da Arquitectura',
  'ACAPORAMA - Associação de Casas do Povo da Região Autonoma da Madeira',
  'ACISO - Associação Empresarial Ourém - Fátima',
  'ACLEM - Arte, Cultura e Lazer, Empresa Municipal, E. M.',
  'ACPMR - Associação Cluster Portugal Mineral Resources',
  'AD ELO Associação de Desenvolvimento Local da Bairrada e Mondego',
  'ADAE - Associação de Desenvolvimento da Alta Estremadura',
  'ADC - Águas da Covilhã, E. M.',
  'ADD - Associação de Desenvolvimento do Dão',
  'ADEMINHO - Associação para o Desenvolvimento do Ensino Profissional do Alto Minho Interior',
  'ADENE - Agência para a Energia',
  'ADEPTOLIVA - Associação para o Desenvolvimento do Ensino Profissional dos Concelhos de Tábua, Oliveira do Hospital e Arganil',
  'ADER-AL - Associação para o Desenvolvimento do Espaço Rural do Norte do Alentejo',
  'ADICE - Associação para o Desenvolvimento Integrado da Cidade de Ermesinde',
  'ADIRN - Associação para o Desenvolvimento Integrado do Ribatejo Norte',
  'ADIST - Associação para o Desenvolvimento do Instituto Superior Técnico',
  'ADL - Associação de Desenvolvimento do Litoral Alentejano',
  'ADP - Águas de Portugal Internacional - Serviços Ambientais, S. A.',
  'ADRAT - Associação de Desenvolvimento da Região do Alto Tâmega',
  'ADREPES - Associação de Desenvolvimento Regional da Península de Setúbal',
  'ADRIMAG - Associação de Desenvolvimento Rural Integrado das Serras de Montemuro, Arada e Gralheira',
  'ADVID - Associação para o Desenvolvimento da Viticultura Duriense',
  'ADXTUR - Agência para o Desenvolvimento Turístico das Aldeias do Xisto',
  'AEBB - Associação Empresarial da Beira Baixa',
  'AECRM-Associação Empresarial Concelho Rio Maior',
  'AEPM - Associação Equiterapêutica do Porto e Matosinhos',
  'AER - Associação Empresarial de Resende',
  'AEVA - Associação para a Educação e Valorização da Região de Aveiro',
  'AGERE- Empresa de Águas Efluentes e Resíduos de Braga, E. M.',
  'AIDA Assoc Industrial Distrito de Aveiro',
  'AMARSUL - Valorização e Tratamento de Resíduos Sólidos, S. A.',
  'AMBILITAL - Investimentos Ambientais no Alentejo, E. I. M.',
  'AMBISOUSA - Empresa Intermunicipal de Tratamento e Gestão de Residuos Sólidos, E.I.M.',
  'AMC - Vouga Associação de Municípios do Carvoeiro - Vouga',
  'AMCAL - Associação de Municípios do Alentejo Central',
  'ANI - Agência Nacional de Inovação, S. A.',
  'APA - Administração do Porto de Aveiro, S. A.',
  'APCB - Associação de Paralisia Cerebral de Braga',
  'APCTP - Associação do Parque de Ciência e Tecnologia do Porto',
  'APCV - Associação de Paralisia Cerebral de Viseu',
  'APEPO-Associação Para o Ensino Profissional do Oeste',
  'APFF - Administração do Porto da Figueira da Foz, S. A.',
  'APIN EIM, SA',
  'APL / Administração do Porto de Lisboa, SA',
  'APPACDM DE LISBOA - Associação Portuguesa de Pais e Amigos do Cidadão Deficiente Mental',
  'APPACDM de Coimbra - Associação Portuguesa de Pais e Amigos do Cidadão Deficiente Mental',
  'APPACDM de Mirandela - Associação Portuguesa de Pais e Amigos do Cidadão Deficiente Mental',
  'APPACDM de Portalegre - Associação Portuguesa de Pais e Amigos do Cidadão Deficiente Mental',
  'APPACDM de Setúbal - Associação Portuguesa de Pais e Amigos do Cidadão Deficiente Mental',
  'APPACDM de Soure',
  'APPACDM de Viana do Castelo - Associação Portuguesa de Pais e Amigos do Cidadão Deficiente Mental',
  'APPACDM do Porto -Associação Portuguesa de Pais e Amigos do Cidadão Deficiente Mental',
  'APPC - Associação do Porto de Paralisia Cerebral',
  'APPDA-Coimbra, Associação Portuguesa para as Perurbações do Desenvolvimento e Autismo de Coimbra',
  'APRAM - Administração dos Portos da Região Autónoma da Madeira, S. A.',
  'APS - Administração dos Portos de Sines e do Algarve, S. A.',
  'APSS ADMINISTRAÇÃO DOS PORTOS DE SETÚBAL E SESIMBRA S. A',
  'AQUANENA - Empresa Municipal de Águas e Saneamento de Alcanena, E. M., S. A.',
  'AR - Águas do Ribatejo, EIM, SA',
  'ARM - Águas e Resíduos da Madeira, S.A.',
  'AS - Empresa das Águas de Santarém, E. M, S. A.',
  'ASCUDT- Associação Sócio-Cultural dos Deficientes de Trás-os-Montes',
  'ASDOURO - Associação de Desenvolvimento do Ensino e Formação Profissional do Alto Douro',
  'ASSOL - Associação de Solidariedade Social de Lafões',
  'ATAHCA - Associação de Desenvolvimento das Terras Altas do Homem Cávado e Ave',
  'ATEC - Associação de Formação para a Indústria',
  'Activar - Associação de Cooperação da Lousã',
  'Actual Gest - Formação Profissional, L.da',
  'AdP - Águas de Portugal, SGPS, S.A',
  'AdP Energias - Energias Renováveis e Serviços Ambientais , S. A.',
  'AdP Valor - Serviços Ambientais, S. A.',
  'AdRA - Águas da Região de Aveiro, S. A.',
  'Administração Central do Sistema de Saúde, I. P.',
  'Administração Regional de Saúde de Lisboa e Vale do Tejo, I. P.',
  'Administração Regional de Saúde do Alentejo (ARSA)',
  'Administração Regional de Saúde do Alentejo, I. P.',
  'Administração Regional de Saúde do Algarve, I. P.',
  'Administração Regional de Saúde do Algarve, I.P.',
  'Administração Regional de Saúde do Centro, I. P.',
  'Administração Regional de Saúde do Centro,IP(ARSC)',
  'Administração Regional de Saúde do Norte, I. P.',
  'Administração Regional de Saúde do Norte,IP (ARSN)',
  'AgdA - Águas Públicas do Alentejo, S. A.',
  'Agrupamento Escolas de Colmeias',
  'Agrupamento Vertical de Canelas',
  'Agrupamento Vertical de Cristelo',
  'Agrupamento Vertical de Escolas de Almodôvar',
  'Agrupamento Vertical de Escolas de Arga e Lima',
  'Agrupamento Vertical de Escolas de Briteiros',
  'Agrupamento Vertical de Escolas de Freixo, Ponte de Lima',
  'Agrupamento Vertical de Escolas de Marco de Canaveses',
  'Agrupamento Vertical de Escolas de Paços de Ferreira',
  'Agrupamento Vertical de Escolas Álvaro Coutinho, O Magriço - Penedono',
  'Agrupamento Vertical de Perafita',
  ... 2120 more items
]

4. db.contratos.aggregate([{$group: {_id: "$tipoprocedimento", count: {$sum: 1}}}])
Resposta: 
[
  { _id: 'Setores especiais – isenção parte II', count: 39 },
  { _id: 'Consulta Prévia Simplificada', count: 96 },
  { _id: 'Ao abrigo de acordo-quadro (art.º 259.º)', count: 4678 },
  { _id: 'Concurso limitado por prévia qualificação', count: 53 },
  { _id: 'Contratação excluída II', count: 144 },
  { _id: 'Concurso público simplificado', count: 3 },
  { _id: 'Procedimento de negociação', count: 1 },
  { _id: 'Ajuste Direto Regime Geral', count: 17067 },
  { _id: 'Concurso público', count: 5300 },
  { _id: 'Ao abrigo de acordo-quadro (art.º 258.º)', count: 995 },
  {
    _id: 'Consulta prévia ao abrigo do artigo 7º da Lei n.º 30/2021, de 21.05',
    count: 1
  },
  { _id: 'Consulta Prévia', count: 8000 }
]


5. db.contratos.aggregate([ { $group: { _id: "$entidade_comunicante", montante_global: { $sum: "$precoContratual" } } }] )
Resposta:
[
  { _id: 'Município de Paredes', montante_global: 6054217.49 },
  {
    _id: 'AGERE- Empresa de Águas Efluentes e Resíduos de Braga, E. M.',
    montante_global: 10043708.51
  },
  {
    _id: 'Agrupamento de Escolas Gonçalo Nunes, Barcelos',
    montante_global: 36997.6
  },
  { _id: 'Fundação Aga Khan Portugal', montante_global: 11171.96 },
  {
    _id: 'ATEC - Associação de Formação para a Indústria',
    montante_global: 838244
  },
  {
    _id: 'Santa Casa da Misericórdia de Vila do Conde',
    montante_global: 744627.59
  },
  {
    _id: 'Centro Social Paroquial de São Tiago da Guarda',
    montante_global: 47952
  },
  { _id: 'Câmara Municipal do Funchal', montante_global: 3668158.94 },
  { _id: 'Freguesia do Rosário', montante_global: 28306 },
  {
    _id: 'Município de Arcos de Valdevez',
    montante_global: 2208969.86
  },
  {
    _id: 'Universidade de Trás-os-Montes e Alto Douro',
    montante_global: 1318754.96
  },
  {
    _id: 'Agrupamento de Escolas Cego do Maio, Póvoa de Varzim',
    montante_global: 26400
  },
  {
    _id: 'Associação de Municípios da Região Autónoma da Madeira',
    montante_global: 43406.8
  },
  {
    _id: 'Instituto da Segurança Social, I. P.',
    montante_global: 9135740.87
  },
  { _id: 'Freguesia de Portimão', montante_global: 26000 },
  {
    _id: 'Centro Interparoquial e Social do Alto Mouro - (CISAM)',
    montante_global: 25048.9
  },
  {
    _id: 'Agrupamento de Escolas de Valongo',
    montante_global: 340730.39
  },
  {
    _id: 'Instituto Português do Sangue e Transplantação, IP',
    montante_global: 23599.62
  },
  { _id: 'Freguesia de Adão', montante_global: 27800 },
  {
    _id: 'Agrupamento de Escolas Domingos Sequeira, Leiria',
    montante_global: 87858.92
  }
]

### 1.3

Entrar na pasta "ex1"
Instalar dependencias utilizando o comando "sudo npm install"
Executar o script utilizando o comando "npm start"


```txt
Desenvolve agora uma API de dados, que responde na porta 15030 e que responda às seguintes rotas/pedidos:

GET /contratos: devolve uma lista com todos os registos;
GET /contratos/:id: devolve o registo com identificador id;
GET /contratos?entidade=EEEE: devolve a lista dos registos correspondentes à entidade EEEE;
GET /contratos?tipo=AAA: devolve a lista dos registos com tipos AAA;
GET /contratos/entidaes: devolve a lista de entidades;
GET /contratos/tipos: devolve a lista de tipos;
POST /contratos: acrescenta um registo novo à BD;
DELETE /contratos/:id: elimina da BD o registo com o identificador id.

Antes de prosseguires, testa as rotas realizadas com o Postman ou similar.
```

```txt

Para testar as varias rotas podem ser executados os seguintes comandos:

1. localhost:15030/contratos > contratos2024.json
• `GET /contratos`: devolve uma lista com todos os registos;

2. localhost:15030/contratos/505387131 
• `GET /contratos/:id`: devolve o registo com identificador `id`;

3. localhost:15030/contratos?entidade=Área Metropolitana do Porto 
• `GET /contratos?entidade=EEEE`: devolve a lista dos registos correspondentes à entidade `EEEE`;

4. localhost:15030/contratos?tipo=Consulta Prévia
• `GET /contratos?tipo=AAA`: devolve a lista dos registos com tipo `AAA`;

5. localhost:15030/contratos/entidades
• `GET /contratos/entidades`: devolve a lista de entidades;

6. localhost:15030/contratos/tipos
• `GET /contratos/tipos`: devolve a lista de tipos;

7. curl -X POST -H "Content-Type: application/json" -d '{"_id": 0,"Número de Registo": 9999999999999,"Código de rua": 1667044,"Rua": "Avenida General Carmona","Local": "Estoril","Freguesia": "U.F. Cascais e Estoril","Espécie": "croacia","Nome Científico": "Catalpa bungei","Origem": "","Data de Plantação": "20/02/2013","Estado": "Jovem","Caldeira": "Sim","Tutor": "Sim","Implantação": "Arruamento","Gestor": "DGEV","Data de actualização": "23/07/2021 19:47:51","Número de intervenções": 5}' localhost:15030/plantas > resposta_put.json
• `POST /plantas`: acrescenta um registo novo à BD;

8. curl -X DELETE localhost:15030/plantas/20615564 > resposta_delete.json
• `DELETE /plantas/:id`: elimina da BD o registo com o identificador `id`.
```
