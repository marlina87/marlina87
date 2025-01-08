async function getCameras() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter(device => device.kind === 'videoinput');
}


async function startCamera() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                const video = document.getElementById('video');
                video.srcObject = stream;
            } catch (error) {
                console.error('Error accessing the camera:', error);
            }
        
            videoDevices.forEach((device, index) => {
                const option = document.createElement('option');
                option.value = device.deviceId;
                option.text = device.label || `Camera ${index + 1}`;
                if (option.text === "NDI Webcam Video 1" || option.text === "HP Wide Vision HD Camera") {
                    videoSelect.appendChild(option);
                }
            });
        
        }

        async function startSelectedCamera() {
            const videoSelect = document.getElementById('cameraSelect');
            const deviceId = videoSelect.value;
            const stream = await navigator.mediaDevices.getUserMedia({ video: { deviceId: { exact: deviceId } } });
            const video = document.getElementById('video');
            video.srcObject = stream;
        }

        window.onload = startCamera;


init();
