function gonder() {
                let input = document.getElementById('userInput').value;
                let duygu = duyguAlgila(input); // Sahte AI burada
                document.getElementById('aiResponse').innerText = "Duygu: " + duygu;
                karakterGuncelle(duygu);
            }
            
            function duyguAlgila(cumle) {
                // Basit sahte duygu algılama
                cumle = cumle.toLowerCase();
                if (cumle.includes("mutlu") || cumle.includes("iyi")) {
                    return "mutlu";
                } else if (cumle.includes("üzgün") || cumle.includes("kötü")) {
                    return "uzgun";
                } else if (cumle.includes("sinirli") || cumle.includes("kızgın")) {
                    return "kizgin";
                } else {
                    return "mutlu"; // Default
                }
            }
            
            function karakterGuncelle(duygu) {
                let img = document.getElementById('characterImage');
                if (duygu === "mutlu") {
                    img.src = "./WhatsApp Image 2025-04-26 at 11.41.02.jpeg";
                } else if (duygu === "uzgun") {
                    img.src = "images/uzgun.png";
                } else if (duygu === "kizgin") {
                    img.src = "images/kizgin.png";
                }
            }
            