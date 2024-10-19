document.getElementById(`playButton`).addEventListener(`click`, () => {
    const videoFrame = document.getElementById(`videoFrame`)
    const video = document.getElementById(`video`)

    const videoURL = `https://terabox.com/sharing/embed?surl=0Rq27BiOAIFNhEUd9AYhpQ&resolution=1440&autoplay=false&mute=false&uk=4399601951365&fid=198970292775458&slid=`
    const videoName = `A Forja - O poder da transformação`
    const videoDescription = document.getElementById(`videoDescription`)
    const doarButton = document.getElementById(`doarButton`)

    video.src = videoURL
    video.title = videoName
    videoFrame.classList.remove(`hidden`)
    setTimeout(() => {
        videoDescription.classList.remove(`hidden`)
    }, 4000)

    setTimeout(() => {
        doarButton.classList.remove(`hidden`)
    }, 2000)
})


document.getElementById(`doarButton`).addEventListener(`click`, () => {


    currentPixCode = `00020126580014BR.GOV.BCB.PIX0136c3cbea24-7b44-4e26-b0dd-e406b19615e75204000053039865802BR5925Gabriel Lucas Aniceto Vie6009SAO PAULO62140510ofMM067fC463041EC1`;


    navigator.clipboard.writeText(currentPixCode).then(() => {
        alert("Código PIX copiado para a área de transferência! Cole o mesmo no seu banco e faça a sua doação.");
    });
})