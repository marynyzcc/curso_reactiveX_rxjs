import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

/* Ejercicio ProgressBar - Crear un progress bar que avance cuando se mueva el scroll vertical de la vista*/
const texto = document.createElement('div');

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum imperdiet ligula et dapibus. Sed venenatis sem eu enim rutrum, at commodo ligula tristique. Pellentesque a turpis eu felis mattis feugiat. Nulla facilisi. Etiam elementum tincidunt erat quis viverra. Vivamus rutrum finibus ligula, eget laoreet diam blandit porta. Phasellus eu congue ante, posuere bibendum magna. Nulla vestibulum ipsum ac risus faucibus commodo. Nullam in scelerisque nunc.
<br/><br/>
Curabitur in pellentesque nulla. Fusce dictum urna id nibh pellentesque, nec tempor diam ultrices. Nunc mollis nibh vitae congue condimentum. Curabitur sit amet quam a mi fermentum placerat at eget erat. Nullam quis scelerisque arcu. Nam pulvinar urna ut purus vestibulum lacinia. Proin eros urna, pulvinar quis metus et, vestibulum consectetur tortor. Praesent dictum dui quis blandit finibus. Nulla sit amet ligula eu mauris finibus elementum.
<br/><br/>
Pellentesque ultrices non leo rutrum dictum. Sed volutpat felis ac nisl aliquet ultricies. Etiam pellentesque mauris a nisl vehicula ornare. Mauris finibus finibus tortor, vitae convallis enim lacinia quis. Duis feugiat velit sed tellus pellentesque tincidunt. Curabitur aliquet, sapien a egestas blandit, quam orci placerat ipsum, et aliquam orci metus at dui. Duis tristique pellentesque dui, mattis ultricies neque luctus ut. Sed rutrum, lacus vitae ultrices ullamcorper, nisl leo consectetur mi, in blandit lorem risus non mauris. Praesent placerat velit ut nisl consequat, sed fringilla felis tincidunt. Quisque auctor faucibus turpis eu consequat. Ut lacinia feugiat tincidunt. Nunc ut interdum nisl. Suspendisse potenti. Sed lacinia, nisi in feugiat venenatis, enim massa facilisis lectus, a varius nulla sapien sit amet elit. Aliquam rutrum dui vitae consequat pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<br/><br/>
Proin ultricies eros nec cursus condimentum. Donec leo tellus, vestibulum id libero et, auctor rhoncus sem. Nullam ligula lacus, blandit id nibh vestibulum, dignissim convallis nisi. Maecenas pellentesque maximus nulla, sit amet placerat nisi rutrum vel. Suspendisse lacinia est eget tellus pretium, non hendrerit justo rhoncus. Praesent condimentum neque metus, a vulputate tortor elementum non. Donec vitae leo tortor. Duis in ligula mauris. Fusce leo mauris, sagittis ut purus sed, faucibus pellentesque dui. Etiam vestibulum dolor et erat interdum rutrum. Nulla sed nulla velit. Suspendisse vulputate, nisi quis fringilla condimentum, nulla sem sodales orci, eget viverra turpis ligula in sapien. Cras dictum vitae diam a placerat. Fusce et eleifend mauris. Praesent pulvinar diam mollis, bibendum risus vitae, fermentum diam.
<br/><br/>
Phasellus mattis sed velit ac varius. Nunc vel euismod dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis metus est, vestibulum id lectus non, dictum cursus neque. Praesent sed tortor vel mauris interdum viverra ut a enim. Duis semper dictum ipsum ac fermentum. Integer malesuada ex velit, sed mattis nunc auctor eget. Cras vehicula ac dui at rhoncus. Nullam tempus lobortis aliquam. Suspendisse non nisl scelerisque, sagittis elit eget, auctor quam. Curabitur semper enim ac porta rhoncus. Integer sagittis nulla ut lectus vehicula, at egestas velit accumsan. Proin mattis imperdiet luctus.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// Funcion que haga el calculo
const calculatPorcentajeScroll = (event) => {
    // console.log(event);

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    // console.log({ scrollTop, scrollHeight, clientHeight });

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    map(calculatPorcentajeScroll),  // equivale a poner map(event => calculatPorcentajeScroll(event))
    tap(console.log)
);


progress$.subscribe(porcentaje => {

    progressBar.style.width = `${ porcentaje }%`;

});