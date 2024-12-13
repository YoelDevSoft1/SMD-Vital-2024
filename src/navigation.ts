import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      links: [
        {
          text: '¿Quienes somos?',
          href: getPermalink('/inicio/quienes-somos'),
        },
        {
          text: 'Mision',
          href: getPermalink('/inicio/mision'),
        },
        {
          text: 'Vision',
          href: getPermalink('/inicio/vision'),
        },
        {
          text: 'Filosofia',
          href: getPermalink('/inicio/filosofia'),
        },
      ],
    },
    {
      text: 'Servicios medicos',
      links: [
        {
          text: 'Caracteristica (Anclado)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Teleconsulta médica',
          href: getPermalink('/teleconsulta-medica'),
        },
        {
          text: 'Electrocardiografía básica',
          href: getPermalink('/electrocardiografia-basica'),
        },
        {
          text: 'Lavado de oídos',
          href: getPermalink('/lavado-de-oido-a-domicilios'),
        },
        {
          text: 'Suero multivitamínico',
          href: getPermalink('/suero-multivitaminico'),
        },
        {
          text: 'Sutura y retiro de puntos',
          href: getPermalink('/sutura-y-retiro-de-puntos'),
        },
        {
          text: 'Retiro y colocación de sonda vesical',
          href: getPermalink('/retiro-y-colocacion-de-sonda-vesical'),
        },
        {
          text: 'Atención a pacientes con COVID-19',
          href: getPermalink('/atencion-a-pacientes-covid-19'),
        },
        {
          text: 'Extracción y cuidado para uñas encarnadas',
          href: getPermalink('/extraccion-y-cuidado-de-uñas-encarnadas'),
        },
        {
          text: 'Cura de heridas: simples y complejas',
          href: getPermalink('/cura-de-heridas-simples-y-complejas'),
        },
        {
          text: 'Valoración medica domiciliaria',
          href: getPermalink('/valoracion-medica-domiciliaria'),
        },
      ],
    },
    {
      text: 'Servicios de Enfermería',
      links: [
        {
          text: 'Toma de signos vitales',
          href: getPermalink('toma-de-signos-vitales'),
        },
        {
          text: 'Inyectología a domicilio',
          href: getPermalink('/inyectologia-a-domicilio'),
        },
        {
          text: 'Enfermería a nivel domiciliario y hospitalario',
          href: getPermalink('/enfemeria-a-nivel-domiciliario-y-hospitalario'),
        },
        {
          text: 'Acompañamiento a citas médicas',
          href: getPermalink('/acompañamiento-a-citas-medicas'),
        },
      ],
    },
    {
      text: 'Laboratorio Clínico',
      links: [
        {
          text: 'Laboratorio a domicilio',
          href: getPermalink('/laboratorio-a-domicilio'),
        },
        {
          text: 'Toma de muestras a domicilio',
          href: getPermalink('/toma-de-muestras-a-domicilio'),
        },
        {
          text: 'Prueba de antígeno a domicilio',
          href: getPermalink('/prueba-de-antigeno-a-domicilio'),
        },
        {
          text: 'Toma de muestra PCR Covid-19 a domicilio (Hisopado nasofaringeo)',
          href: getPermalink('/toma-de-muestra-pcr-covid-19'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Lista de Blogs',
          href: getBlogPermalink(),
        },
        {
          text: 'Articulos',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Articulos (con MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Categoria de pagina',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/Yoel Dev Soft/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Servicio',
      links: [
        { text: 'Caracteristicas', href: '#' },
      ],
    },
    {
      title: 'Plataforma',
      links: [
        { text: 'Nosotros', href: '/inicio/quienes-somos' },
        { text: 'Vision', href: '#' },
        { text: 'Mision', href: '#' },
        { text: 'Filosofia', href: '#' },
      ],
    },
    {
      title: 'Suporte',
      links: [
        { text: 'Comunidad Blog', href: '#' },
        { text: 'Servicios profesionales', href: '#' },
      ],
    },
    {
      title: 'Compañia',
      links: [
        { text: 'Acerca', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Impacto Social', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terminos', href: getPermalink('/terms') },
    { text: 'Politica de privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Yoel Dev Soft/astrowind' },
  ],
  footNote: `
    Hecho por <a class="text-blue-600 underline dark:text-muted" href="https://Yoel Dev Soft.com/"> Yoel Dev Soft</a> · Todos los derechos reservados.
  `,
};
