// Services data for the beauty salon
const servicesData = [
    {
        id: "manicure",
        title: "Manicure",
        icon: "Certainly! Pink is a versatile and popular color….jpeg",
        exampleImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663391135670/QCFnipDip87VqHRo5HDK79/service-manicure-real_9d7ce672.jpg",
        services: [
            { name: "Unhas Acrílicas", price: "de ****", description: "Unhas de acrílico profissionais com qualquer design e cor." },
            { name: "Unhas de acrílico com extensão", price: "de ****", description: "Extensão completa de unhas com alongamento e design profissional." },
            { name: "Unhas de acrílico sem extensão", price: "de ****", description: "Fortalecimento e design em unhas naturais." },
            { name: "Manutenção em Acrílico", price: "de ****", description: "Correção e renovação de manicure acrílica." },
            { name: "Unhas de Acrigel", price: "de ****", description: "Sistema híbrido premium para uma manicure perfeita." },
            { name: "Manutenção Acrigel", price: "de ****", description: "Correção e renovação de manicure Acrigel." },
            { name: "Armadura de unhas acrílica", price: "de ****", description: "Fortalecimento e proteção das unhas com sistema acrílico." },
            { name: "Acrigel para unhas", price: "de ****", description: "Fortalecimento das unhas com a tecnologia Acrigel." },
            { name: "Esmalte em gel", price: "de ****", description: "Manicure com esmalte em gel para uma cobertura duradoura." },
            { name: "Spa de mãos", price: "de ****", description: "Tratamentos de spa para as mãos com nutrição e hidratação." },
        ]
    },
    {
        id: "pedicure",
        title: "Pedicure",
        icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663391135670/QCFnipDip87VqHRo5HDK79/icon-pedicure-Qctc5yr2PJsU7Pneosbawp.webp",
        exampleImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663391135670/QCFnipDip87VqHRo5HDK79/service-pedicure-real_6375f2fa.jpg",
        services: [
            { name: "Pedicure Tradicional", price: "de ****", description: "Pedicure clássico com esmaltação e cuidados profissionais." },
            { name: "Esmalte em Gel para Pedicure", price: "de ****", description: "Pedicure com esmalte em gel de longa duração." },
            { name: "Pedicure Brasil", price: "de ****", description: "Pedicure brasil com esfoliação e cuidados." },
            { name: "Spa de Pés", price: "de ****", description: "Tratamento completo de spa para os pés com hidratação." },
            { name: "Manutenção de Pedicure", price: "de ****", description: "Manutenção e renovação de pedicure anterior." },
        ]
    },
    {
        id: "pestanas",
        title: "Pestanas",
        icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663391135670/QCFnipDip87VqHRo5HDK79/icon-pestanas-VfePMEMWQjQ6hfEFLoaTP6.webp",
        exampleImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663391135670/QCFnipDip87VqHRo5HDK79/service-pestanas-real_ff2f6872.jpg",
        services: [
            { name: "Extensões de Pestanas", price: "de ****", description: "Extensões de Pestanas profissionais com aplicação individual." },
            { name: "Pestanas Clássicas", price: "de ****", description: "Extensões de pestanas clássicas (fio a fio)." },
            { name: "Pestanas coloridas", price: "de ****", description: "Extensões de pestanas coloridas para um visual radiante." },
            { name: "Pestanas Volume", price: "de ****", description: "Extensões com efeito volume para um olhar impactante." },
            { name: "Manutenção de Pestanas", price: "de ****", description: "Manutenção e reforço de extensões existentes." },
        ]
    },
    {
        id: "sobrancelhas",
        title: "Sobrancelhas",
        icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663391135670/QCFnipDip87VqHRo5HDK79/icon-sobrancelhas-HKRnQFeWpz7FgzYLiHGg3P.webp",
        exampleImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663391135670/QCFnipDip87VqHRo5HDK79/service-sobrancelhas-real_e6e4b7e2.jpg",
        services: [
            { name: "Modelagem de Sobrancelhas", price: "de ****", description: "Correção das sobrancelhas para aparência ideal." },
            { name: "Depilação com Linha", price: "de ****", description: "Remoção de pelos utilizando técnica de linha." },
            { name: "Laminação de Sobrancelhas", price: "de ****", description: "Laminação de sobrancelhas para estilo duradouro." },
            { name: "Sobrancelhas Permanente", price: "de ****", description: "Maquilhagem permanente das sobrancelhas." },
        ]
    },
    {
        id: "depilacao",
        title: "Depilação",
        icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663391135670/QCFnipDip87VqHRo5HDK79/icon-depilacao-8GQ5TFhTEUF6qDVMoNxfgg.webp",
        exampleImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663391135670/QCFnipDip87VqHRo5HDK79/service-depilacao-real_7fa47e7e.jpg",
        services: [
            { name: "Depilação Brasileira", price: "de ****", description: "Remoção profissional de pelos com cera." },
            { name: "Serviços de Depilação com Cera", price: "de ****", description: "Remoção de pelos no corpo e rosto com cera." },
            { name: "Depilação de Corpo Inteiro", price: "de ****", description: "Depilação completa do corpo com cera de qualidade." },
            { name: "Depilação com Laser", price: "de ****", description: "Remoção de pelos com tecnologia laser avançada." },
        ]
    },
    {
        id: "maquilhagem",
        title: "Maquilhagem",
        icon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663391135670/QCFnipDip87VqHRo5HDK79/icon-maquilhagem-5X6xyjGCFjWz84nPLVHM9m.webp",
        exampleImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663391135670/QCFnipDip87VqHRo5HDK79/service-maquilhagem-real_321f71c5.jpg",
        services: [
            { name: "Maquilhagem Permanente", price: "de ****", description: "Maquilhagem permanente com resultados duradouros." },
            { name: "Maquilhagem Permanente de Sobrancelhas", price: "de ****", description: "Maquilhagem permanente das sobrancelhas com resultado natural." },
            { name: "Maquilhagem Permanente de Lábios", price: "de ****", description: "Coloração permanente dos lábios." },
            { name: "Maquilhagem Profissional", price: "de ****", description: "Maquilhagem profissional para eventos especiais." },
            { name: "Maquilhagem Noiva", price: "de ****", description: "Maquilhagem especial para o dia do casamento." },
        ]
    }
];
