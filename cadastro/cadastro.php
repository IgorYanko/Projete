<?php
    include("conexao.php");

    $nome=$_POST['nome'];
    $data=$_POST['data'];
    $altura=$_POST['altura'];
    $peso=$_POST['peso'];
    $sexo=$_POST['sexo'];
    $alergias=$_POST['alergias'];
    $historico=$_POST['historico'];

    $sql="INSERT INTO cadastro(nome, data, altura, peso, sexo, alergias, historico)
            Values ('$nome', '$data', '$altura', '$peso', '$sexo', '$alergias', '$historico')";

    if(mysqli_query($conexao,$sql));
    echo("O cadastro ")
?>