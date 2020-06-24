<?php
$destinatario = "carlos.felipe.sist@gmail.com";
//correo donde se enviara el mensaje
$nombre = $_POST["nombre"];

$asunto =$_POST["asunto"];

$mensaje = $_POST["mensaje"];

$email  = $_POST["email"];




$header = " ENVIADO DESDE MI WEB PERSONAL";
$mensajeCompleto = "
    \nNombre del remitente: ".$nombre."
    \ncorreo: ".$email."
    \nmensaje:".$mensaje."
";

mail($destinatario,$asunto,$mensajeCompleto,$header);
echo"<script>alert('correo enviado exitosamente')</script>";
echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>;
?>