<?php
header('Content-Type: application/json');

// Caminho do arquivo de contagem
$arquivo = 'contador.txt';

// Se o arquivo não existir, cria com valor inicial 0
if (!file_exists($arquivo)) {
    file_put_contents($arquivo, '0');
}

// Lê o valor atual do contador e incrementa
$visitas = (int) file_get_contents($arquivo);
$visitas++;

// Salva o novo valor no arquivo
file_put_contents($arquivo, $visitas);

// Retorna o número de visitas em formato JSON
echo json_encode(['visitas' => $visitas]);
?>
