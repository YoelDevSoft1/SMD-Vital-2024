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
          href: getPermalink('/services'),
        },
        {
          text: 'Electrocardiografía básica',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Lavado de oídos',
          href: getPermalink('/about'),
        },
        {
          text: 'Suero multivitamínico',
          href: getPermalink('/contact'),
        },
        {
          text: 'Sutura y retiro de puntos',
          href: getPermalink('/terms'),
        },
        {
          text: 'Retiro y colocación de sonda vesical',
          href: getPermalink('/privacy'),
        },
        {
          text: 'Atención a pacientes con COVID-19',
          href: getPermalink('/privacy'),
        },
        {
          text: 'Extracción y cuidado para uñas encarnadas',
          href: getPermalink('/privacy'),
        },
        {
          text: 'Cura de heridas: simples y complejas',
          href: getPermalink('/privacy'),
        },
        {
          text: 'Valoración medica domiciliaria',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Servicios de Enfermería',
      links: [
        {
          text: 'Toma de signos vitales',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Inyectología a domicilio',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Enfermería a nivel domiciliario y hospitalario',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Acompañamiento a citas médicas',
          href: getPermalink('/landing/product'),
        },
      ],
    },
    {
      text: 'Laboratorio Clínico',
      links: [
        {
          text: 'Laboratorio a domicilio',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Toma de muestras a domicilio',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Prueba de antígeno a domicilio',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Toma de muestra PCR Covid-19 a domicilio (Hisopado nasofaringeo)',
          href: getPermalink('/landing/product'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
