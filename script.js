function generateRandomString() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    return Array.from({ length: 50 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

function ObfuscatedCode() {
    const container = document.getElementById('obfuscated-code');
    container.innerHTML = `<pre class="bg-gray-800 text-green-400 p-2 rounded-md text-sm overflow-hidden"><code id="random-string"></code></pre>`;

    const textElement = document.getElementById('random-string');
    setInterval(() => {
        textElement.textContent = generateRandomString();
    }, 10);
}

function HyperionBypass() {
    const container = document.getElementById('hyperion-bypass');
    container.innerHTML = `
      <div class="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div id="progress-bar" class="absolute top-0 left-0 h-full bg-blue-500 transition-all"></div>
        <span id="progress-text" class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-xs font-bold">0% Bypassed</span>
      </div>`;

    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    let progress = 0;

    setInterval(() => {
        progress = (progress + 1) % 101;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${progress}% Bypassed`;
    }, 45);
}

function FloatingParticles() {
    const container = document.getElementById('floating-particles');
    container.innerHTML = Array.from({ length: 50 }).map(() => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const size = Math.random() * 10 + 5;
        const duration = Math.random() * 10 + 5;

        return `
        <div 
          class="absolute bg-gray-300 rounded-full opacity-20" 
          style="top:${top}%; left:${left}%; width:${size}px; height:${size}px; animation:float ${duration}s linear infinite;">
        </div>`;
    }).join('');
}
ObfuscatedCode();
HyperionBypass();
FloatingParticles();