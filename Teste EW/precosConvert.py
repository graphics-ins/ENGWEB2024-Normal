import json

# Função para ler o arquivo JSON
def ler_arquivo_json(nome_arquivo):
    try:
        with open(nome_arquivo, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        print(f"Arquivo {nome_arquivo} não encontrado.")
        return None
    except Exception as e:
        print(f"Erro ao ler o arquivo {nome_arquivo}: {e}")
        return None

# Função para converter o campo precoContratual para number
def converter_preco_para_number(contratos):
    for contrato in contratos:
        preco_contratual = contrato.get('precoContratual')
        if isinstance(preco_contratual, str):
            contrato['precoContratual'] = float(preco_contratual.replace(',', '.'))
        elif isinstance(preco_contratual, int):
            contrato['precoContratual'] = float(preco_contratual)

# Função para escrever os registros corrigidos no arquivo
def escrever_arquivo_json(nome_arquivo, dados):
    try:
        with open(nome_arquivo, 'w') as file:
            json.dump(dados, file, indent=2)
        print(f"Os dados foram escritos corretamente no arquivo {nome_arquivo}")
    except Exception as e:
        print(f"Erro ao escrever no arquivo {nome_arquivo}: {e}")

# Nome do arquivo
nome_arquivo = 'contratos2024.json'

# Ler os contratos do arquivo JSON
contratos = ler_arquivo_json(nome_arquivo)

# Verificar se os contratos foram lidos corretamente
if contratos:
    # Converter o campo precoContratual para number
    converter_preco_para_number(contratos)

    # Escrever os registros corrigidos no mesmo arquivo
    escrever_arquivo_json(nome_arquivo, contratos)
