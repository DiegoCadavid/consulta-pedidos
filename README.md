# Consulta pedidos de DURESPO S.A Para mi Tio Fabian

Hola tio, como se me complicaba solucionar el bug ( Siendo sinceros no tengo ni idea de que lo ocasionaba ) pense que la mejor forma de ayudarte era reconstruyendo la aplicacion desde cero

![Imagen interfaz](https://res.cloudinary.com/dd4p0ksdu/image/upload/v1665986434/file_upload_app/pwl2fvzfqw5hr3shs62x.png)

### Instalaccion
```bash
npm install
```

### Notas
Por un problema del **cors** lo que me evitaba el acceso al servidor de Durespo S.A no programe que se obtuvieran los datos de la servidor sino que se "simulara" dicha obtenccion de datos, asi que para que sea 100% funcional desde el servidor da acceso y modifica la siguiente funcion


```javascript
// Directorio de la funcion:  "./src/components/orders/OrdersContainer.jsx"

 useEffect(() => {
    setIsLoading(true);

    // Aqui se realizaria la peticcion http
    setTimeout(() => {

      if(errorHttpFake) {
        // Asi se gestionarian los errores en el catch
        return navigate('/');
      }

      // Asi se guardara la data proviniente de la respuesta de la peticcion
      setData(fakeData.resultado);
      setIsLoading(false);
    }, 1500);
  }, [orderId]);
```

### Archivos extras
[Prototipado en Figma](https://www.figma.com/file/Mz8ZrWAan9NQER0PU0bomk/Consulta-de-pedidos?node-id=0%3A1)


