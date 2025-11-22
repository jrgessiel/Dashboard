/**
 * IIFE (Immediately Invoked Function Expression) para criar um escopo privado,
 */
(function () {
    "use-strict";

    // =========================================================================
    // CONFIGURAÇÃO CENTRALIZADA (ATUALIZADA)
    // =========================================================================

    const CONFIG = {
        // Datas para contagem (Mês é 0-indexado: 0 = Jan, 11 = Dez)
        DATES: {
            laura: { month: 5, day: 12 },  // 12 de Junho
            gessiel: { month: 5, day: 27 }, // 27 de Junho
            casal: { month: 10, day: 5 }   // 05 de Novembro
        },

        MUSIC: [
            { title: "Roulette", artist: "System of a down" },
            { title: "Snuff", artist: "Corey Taylor" }
        ],

        STATIC_PHOTOS: [
                // Domingo (Índice 0) - Galáxia de Andrômeda (M31)
                {
                    url: 'https://olhardigital.com.br/wp-content/uploads/2024/09/unnamed-17.png',
                    title: 'Galáxia de Andrômeda: M31',
                    desc: 'Em meio a nuvens gigantescas e caóticas, novas luzes estão nascendo. Que ela te lembre que, mesmo quando a semana começa cheia de incertezas, é no meio do caos que a gente encontra força para brilhar.',
                    alt: 'A galáxia espiral de Andrômeda, mostrando seu núcleo brilhante.'
                },
                // Segunda (Índice 1) - Nebulosa do Anel (M57)
                {
                    url: 'https://tse2.mm.bing.net/th/id/OIP.pw-4AKODTy6zYS6sZ77OxwAAAA',
                    title: 'Nebulosa do Anel: M57',
                    desc: 'Colunas gigantescas que resistem bravamente à radiação, protegendo novas estrelas. Para sua segunda-feira, desejo a firmeza desses pilares. Mantenha sua base forte; você aguenta qualquer pressão.',
                    alt: 'Uma nebulosa colorida em forma de anel ou rosquinha com uma estrela anã branca no centro.'
                },
                // Terça (Índice 2) - Pilares da Criação
                {
                    url: 'https://t2.tudocdn.net/644161',
                    title: 'Os Pilares da Criação',
                    desc: 'O berçário de estrelas mais próximo de nós. É tão brilhante que pode ser visto a olho nu, uma prova de que coisas incríveis estão mais perto do que imaginamos.',
                    alt: 'Três colunas gigantes de gás e poeira marrom-alaranjada, com estrelas vermelhas nas pontas.'
                },
                // Quarta (Índice 3) - Nebulosa de Carina
                {
                    url: 'https://apod.nasa.gov/apod/image/1812/CarinaNebulaGerminiani.jpg',
                    title: 'Nebulosa de Carina: O Berçário Cósmico',
                    desc: 'Cinco galáxias em uma dança cósmica. No meio da semana cansativa, fica essa imagem para lembrar que existe harmonia e beleza mesmo nas interações mais complexas.',
                    alt: 'Uma foto em cores vibrantes da Nebulosa de Carina, mostrando gases rosa e azuis.'
                },
                // Quinta (Índice 4) - Galáxia do Redemoinho (M51)
                {
                    url: 'https://img.odcdn.com.br/wp-content/uploads/2023/08/galaxia-M51.jpg',
                    title: 'Galáxia do Redemoinho: M51',
                    desc: 'Nossa vizinha galáctica viajando pelo vácuo em nossa direção. Assim como meus pensamentos, que ignoram nossa distância e chega em você num instante para te desejar força.',
                    alt: 'Uma galáxia espiral com braços vermelhos e laranjas brilhantes.'
                },
                // Sexta (Índice 5) - Nebulosa de Órion
                {
                    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg/960px-Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg',
                    title: 'Nebulosa de Órion: A Vizinhança das Estrelas',
                    desc: 'Famosa por seus braços espirais perfeitos. Sexta-feira é dia de soltar o peso da semana, deixando a vida fluir como esse redemoinho cósmico.',
                    alt: 'Uma visão detalhada de nuvens de gás e poeira em tons de roxo, laranja e azul.'
                },
                // Sábado (Índice 6) - Quinteto de Stephan
                {
                    url: 'https://spacetoday.com.br/wp-content/uploads/2014/03/SQ-HST-Subaru-L.jpg',
                    title: 'Quinteto de Stephan: A Dança das Galáxias',
                    desc: 'O belo final de um ciclo estelar que criou essa obra de arte. Hoje é dia de esquecer os números da contabilidade e apenas ser. Aproveite seu lugar no universo.',
                    alt: 'Cinco galáxias próximas umas das outras.'
                }
            ],

        // Lista de eventos futuros para a Previsão Astronômica (Visíveis a olho nu de Minas Gerais)
        FORECAST_EVENTS: [
            // Dezembro 2025: Conjunção Planetária 
            {
                endDate: '2025-12-07',
                title: 'Conjunção Brilhante: Vênus e Júpiter',
                desc: 'Na manhã de 07/Dez. Os planetas se alinham antes do amanhecer.'
            },
            // Dezembro 2025: Chuva de Meteoros 
            {
                endDate: '2025-12-15',
                title: 'Chuva de Meteoros Geminídeas',
                desc: 'Na madrugada de 15/Dez. Uma das melhores chuvas do ano.'
            },
            // Dezembro 2025: Chuva de Meteoros 
            {
                endDate: '2025-12-23',
                title: 'Chuva de Meteoros Úrsidas',
                desc: 'Na madrugada de 23/Dez. Uma chuva de baixa intensidade.'
            }
        ],

        // ATUALIZAÇÃO: Usando termos mais específicos para aumentar a precisão e estabilidade
        CITIES: [
            { name: 'Belo Horizonte,MG', prefix: 'bh' }, // Termo mais específico
            { name: 'Bambuí,MG', prefix: 'bambui' } // Termo mais específico
        ],
        
        QUOTES: [
            // Domingo
            { quote: "Onde quer que você esteja, é onde eu quero estar. O resto é geografia.", author: "Taylor Swift" },
            
            // Segunda
            { quote: "Você não tem a menor chance de vencer a menos que lute.", author: "Attack On Titan" },
            
            // Terça
            { quote: "Às vezes, a vida não te dá o que você quer, não porque você não mereça, mas porque você merece muito mais.", author: "Os Padrinhos Mágicos" },
            
            // Quarta
            { quote: "Um pequeno passo pode ser o início de uma grande jornada.", author: "Stephen Hawking" },
            
            // Quinta
            { quote: "Se você escutar uma voz dentro de você dizendo pra você não pintar, então pinte, e essa voz será silenciada.", author: "Vincent Van Gogh" },
            
            // Sexta
            { quote: "O passado pode doer. Mas, do jeito que eu vejo, você pode fugir dele ou aprender com ele.", author: "O Rei Leão" },
            
            // Sábado
            { quote: "O que faz a distância ser tão difícil é o silêncio.", author: "Doctor Who" }
        ],
        
        TRANSLATIONS: {
            "New Moon": "Lua Nova", "Waxing Crescent": "Lua Crescente", "First Quarter": "Quarto Crescente",
            "Waxing Gibbous": "Gibosa Crescente", "Full Moon": "Lua Cheia", "Waning Gibbous": "Gibosa Minguante",
            "Last Quarter": "Quarto Minguante", "Waning Crescent": "Lua Minguante"
        }
    };

    // =========================================================================
    // CACHE DE ELEMENTOS DO DOM (Sem alteração)
    // =========================================================================

    const ELEMENTS = {
        themeToggle: document.getElementById('theme-toggle'),
        countdowns: {
            laura: document.getElementById('aniv-laura'),
            gessiel: document.getElementById('aniv-gessiel'),
            casal: document.getElementById('aniv-casal')
        },
        quote: {
            title: document.getElementById('quote-title'),
            text: document.getElementById('quote-text'),
            author: document.getElementById('quote-author')
        },
        music: [
            {
                art: document.getElementById('music-art-1'),
                title: document.getElementById('music-title-1'),
                artist: document.getElementById('music-artist-1')
            },
            {
                art: document.getElementById('music-art-2'),
                title: document.getElementById('music-title-2'),
                artist: document.getElementById('music-artist-2')
            }
        ],
        apod: {
            img: document.getElementById('apod-img'),
            title: document.getElementById('apod-title'),
            desc: document.getElementById('apod-desc'),
            source: document.getElementById('apod-source')
        },
        forecast: [
            {
                title: document.getElementById('astro-event-1-title'),
                desc: document.getElementById('astro-event-1-desc')
            },
            {
                title: document.getElementById('astro-event-2-title'),
                desc: document.getElementById('astro-event-2-desc')
            }
        ],
        weather: {
            bh: {
                desc: document.getElementById('weather-bh-desc'),
                temp: document.getElementById('weather-bh-temp'),
                icon: document.getElementById('weather-bh-icon'),
                sunrise: document.getElementById('sunrise-bh'),
                sunset: document.getElementById('sunset-bh'),
                moon: document.getElementById('moon-phase-bh')
            },
            bambui: {
                desc: document.getElementById('weather-bambui-desc'),
                temp: document.getElementById('weather-bambui-temp'),
                icon: document.getElementById('weather-bambui-icon'),
                sunrise: document.getElementById('sunrise-bambui'),
                sunset: document.getElementById('sunset-bambui'),
                moon: document.getElementById('moon-phase-bambui')
            }
        }
    };

    const FALLBACKS = {
        MUSIC_ART: 'https://th.bing.com/th/id/OIP.a-f11vHnb_J2HeG2p_I-ogHaHa',
        WEATHER: '--'
    };

    // =========================================================================
    // HELPERS DE UI E UTILITÁRIOS (Sem alteração)
    // =========================================================================

    const ui = {
        updateText: (el, text) => { if (el) el.textContent = text; },
        updateHTML: (el, html) => { if (el) el.innerHTML = html; },
        updateImage: (el, src, alt) => {
            if (el) {
                el.src = src;
                el.alt = alt;
            }
        }
    };

    const getWeatherIcon = (code) => {
        if (code === 113) return 'sunny';
        if (code === 116) return 'partly_cloudy_day';
        if ([119, 122].includes(code)) return 'cloud';
        if ([143, 248, 260].includes(code)) return 'foggy';
        if ([176, 263, 266, 293, 296, 299, 302, 305, 308, 353, 356, 359].includes(code)) return 'rainy';
        if ([179, 227, 323, 326, 329, 332, 335, 338, 368, 371].includes(code)) return 'weather_snowy';
        if ([200, 386, 389].includes(code)) return 'thunderstorm';
        return 'cloud';
    };

    const formatTime = (time) => time.replace(" AM", "").replace(" PM", "").padStart(5, '0');

    // =========================================================================
    // LÓGICA DO DASHBOARD (SÍNCRONA) (Sem alteração)
    // =========================================================================

    const calculateDaysRemaining = (targetDate) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const currentYear = today.getFullYear();
        let eventDate = new Date(currentYear, targetDate.month, targetDate.day);
        if (eventDate < today) {
            eventDate.setFullYear(currentYear + 1);
        }
        const diffTime = eventDate.getTime() - today.getTime();
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    const updateCountdowns = () => {
        ui.updateText(ELEMENTS.countdowns.laura, calculateDaysRemaining(CONFIG.DATES.laura));
        ui.updateText(ELEMENTS.countdowns.gessiel, calculateDaysRemaining(CONFIG.DATES.gessiel));
        ui.updateText(ELEMENTS.countdowns.casal, calculateDaysRemaining(CONFIG.DATES.casal));
    };

    const updateWeeklyQuote = () => {
        const dayIndex = new Date().getDay(); // 0-6
        const quote = CONFIG.QUOTES[dayIndex];
        ui.updateText(ELEMENTS.quote.title, "Frase do Dia");
        ui.updateText(ELEMENTS.quote.text, `“${quote.quote}”`);
        ui.updateText(ELEMENTS.quote.author, `- ${quote.author}`);
    };

    const updateAstroForecast = () => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const upcomingEvents = CONFIG.FORECAST_EVENTS.filter(event => {
            const eventDate = new Date(event.endDate + 'T23:59:59');
            return eventDate >= today;
        });

        if (upcomingEvents.length > 0) {
            ui.updateText(ELEMENTS.forecast[0].title, upcomingEvents[0].title);
            ui.updateText(ELEMENTS.forecast[0].desc, upcomingEvents[0].desc);
        } else {
            ui.updateText(ELEMENTS.forecast[0].title, "Nenhum evento próximo");
            ui.updateText(ELEMENTS.forecast[0].desc, "Verifique mais tarde.");
        }

        if (upcomingEvents.length > 1) {
            ui.updateText(ELEMENTS.forecast[1].title, upcomingEvents[1].title);
            ui.updateText(ELEMENTS.forecast[1].desc, upcomingEvents[1].desc);
        } else {
            ui.updateText(ELEMENTS.forecast[1].title, "");
            ui.updateText(ELEMENTS.forecast[1].desc, "");
        }
    };

    const updateStaticPhoto = () => {
        const dayIndex = new Date().getDay(); // 0-6
        const photo = CONFIG.STATIC_PHOTOS[dayIndex];
        ui.updateImage(ELEMENTS.apod.img, photo.url, photo.alt);
        ui.updateText(ELEMENTS.apod.title, photo.title);
        ui.updateText(ELEMENTS.apod.desc, photo.desc);
        ui.updateText(ELEMENTS.apod.source, 'Foto do dia');
    };

    // =========================================================================
    // LÓGICA DE API (ASSÍNCRONA) (ATUALIZADA)
    // =========================================================================

    const fetchiTunesArtwork = async (song, elementGroup) => {
        const searchTerm = `${song.title} ${song.artist}`;
        const url = `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&entity=song&limit=1`;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Falha na rede do iTunes');
            const data = await response.json();
            let artworkUrl = FALLBACKS.MUSIC_ART;
            if (data.resultCount > 0 && data.results[0].artworkUrl100) {
                artworkUrl = data.results[0].artworkUrl100.replace('100x100', '200x200');
            }
            ui.updateImage(elementGroup.art, artworkUrl, `${song.title} - ${song.artist}`);
            ui.updateText(elementGroup.title, song.title);
            ui.updateText(elementGroup.artist, song.artist);
        } catch (error) {
            console.error(`Erro ao buscar música (${song.title}):`, error);
            ui.updateImage(elementGroup.art, FALLBACKS.MUSIC_ART, "Falha ao carregar");
            ui.updateText(elementGroup.title, song.title);
            ui.updateText(elementGroup.artist, song.artist);
        }
    };

    /**
     * ATUALIZADO: Inclui um timeout de 5 segundos para evitar requisições penduradas.
     */
    const fetchWeather = async (city, elementGroup) => {
        const timeout = 5000; // 5 segundos
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout); // Aborta após 5s
        
        try {
            const encodedCity = encodeURIComponent(city);
            const url = `https://wttr.in/${encodedCity}?format=j1`;
            
            // Passa o signal para o fetch, permitindo que o AbortController cancele a requisição
            const response = await fetch(url, { signal: controller.signal });
            
            clearTimeout(id); // Limpa o timeout se a requisição for concluída
            
            if (!response.ok) {
                // Se a resposta não for 2xx (por exemplo, 404, 500), trata como erro
                throw new Error(`Resposta inválida (${response.status}) ao buscar clima de ${city}`);
            }
            
            const data = await response.json();
            const current = data.current_condition[0];
            const astronomy = data.weather[0].astronomy[0];

            // Atualiza o DOM 
            ui.updateText(elementGroup.desc, current.lang_pt[0].value);
            ui.updateText(elementGroup.temp, `${current.temp_C}°`);
            ui.updateText(elementGroup.icon, getWeatherIcon(parseInt(current.weatherCode, 10)));
            ui.updateText(elementGroup.sunrise, formatTime(astronomy.sunrise));
            ui.updateText(elementGroup.sunset, formatTime(astronomy.sunset));
            ui.updateText(elementGroup.moon, CONFIG.TRANSLATIONS[astronomy.moon_phase] || astronomy.moon_phase);
            
        } catch (error) {
            clearTimeout(id); // Limpa o timeout em caso de erro

            let errorMessage = `Erro desconhecido.`;

            if (error.name === 'AbortError') {
                errorMessage = `A requisição excedeu o tempo limite (${timeout / 1000}s).`;
            } else if (error.message.includes('Resposta inválida')) {
                errorMessage = error.message;
            } else {
                errorMessage = `Falha de rede/API: ${error.message}`;
            }

            console.error(`Erro no Clima (${city}):`, errorMessage);

            ui.updateText(elementGroup.desc, 'Indisponível');
            ui.updateText(elementGroup.temp, FALLBACKS.WEATHER);
            ui.updateText(elementGroup.icon, 'cloud_off');
        }
    };

    // =========================================================================
    // INICIALIZAÇÃO E TEMA (Sem alteração)
    // =========================================================================

    const initializeTheme = () => {
        if (!ELEMENTS.themeToggle) return;
        const applyTheme = (theme) => {
            if (theme === "dark-theme") document.body.classList.add("dark-theme");
            else document.body.classList.remove("dark-theme");
        };
        const savedTheme = localStorage.getItem("theme") || "light-theme";
        applyTheme(savedTheme);
        ELEMENTS.themeToggle.addEventListener("click", () => {
            const isDarkMode = document.body.classList.contains("dark-theme");
            const newTheme = isDarkMode ? "light-theme" : "dark-theme";
            applyTheme(newTheme);
            localStorage.setItem("theme", newTheme);
        });
    };

    /**
     * Função principal de inicialização.
     */
    const init = () => {
        initializeTheme();

        // Tarefas síncronas 
        updateCountdowns();
        updateWeeklyQuote();
        updateAstroForecast();
        updateStaticPhoto(); 

        // Tarefas assíncronas 
        fetchiTunesArtwork(CONFIG.MUSIC[0], ELEMENTS.music[0]);
        fetchiTunesArtwork(CONFIG.MUSIC[1], ELEMENTS.music[1]);

        fetchWeather(CONFIG.CITIES[0].name, ELEMENTS.weather.bh); // 'Belo Horizonte,MG'
        fetchWeather(CONFIG.CITIES[1].name, ELEMENTS.weather.bambui); // 'Bambuí,MG'
    };

    document.addEventListener('DOMContentLoaded', init);

})();
