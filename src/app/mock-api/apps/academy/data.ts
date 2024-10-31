/* eslint-disable */
export const categories = [
    {
        id: 'mechanical',
        title: 'Механика',
        slug: 'механика'
    },
    {
        id: 'optics',
        title: 'Оптика',
        slug: 'оптика'
    },
    {
        id: 'thermodynamics',
        title: 'Термодинамика',
        slug: 'термодинамика'
    },
    {
        id: 'quantum-physics',
        title: 'Квантовая физика',
        slug: 'квантовая'
    }
];
export const courses = [
    {
        id: '1',
        title: 'Законы Ньютона',
        slug: 'Законы Ньютона',
        description: 'Законы Ньютона',
        category: 'механика',
        duration: 45,
        totalSteps: 11,
        updatedAt: 'Jun 28, 2021',
        featured: true,
        progress: {
            currentStep: 0,
            completed: 0
        }
    },
    {
        id: '2',
        title: 'Лагранжева механика',
        slug: 'Лагранжева механика',
        description: 'Лагранжева механика',
        category: 'механика',
        duration: 90,
        totalSteps: 11,
        updatedAt: 'Nov 01, 2021',
        featured: true,
        progress: {
            currentStep: 0,
            completed: 0
        }
    },
];
export const demoCourseContent = `
<h2>
    Accusantium aspernatur autem enim
</h2>
<p>
    Blanditiis, fugit voluptate! Assumenda blanditiis consectetur, labque cupiditate ducimus eaque earum, fugiat illum
    ipsa, necessitatibus omnis quaerat reiciendis totam. Architecto, <strong>facere</strong> illum molestiae nihil nulla
    quibusdam quidem vel! Atque <em>blanditiis deserunt</em>.
</p>
<p>
    Debitis deserunt doloremque labore laboriosam magni minus odit:
</p>
<ol>
    <li>Asperiores dicta esse maiores nobis officiis.</li>
    <li>Accusamus aliquid debitis dolore illo ipsam molettiae possimus.</li>
    <li>Magnam mollitia pariatur perspiciatis quasi quidem tenetur voluptatem! Adipisci aspernatur assumenda dicta.</li>
</ol>
<p>
    Animi fugit incidunt iure magni maiores molestias.
</p>
<h3>
    Consequatur iusto soluta
</h3>
<p>
    Aliquid asperiores corporis — deserunt dolorum ducimus eius eligendi explicabo quaerat suscipit voluptas.
</p>
<p>
    Deserunt dolor eos et illum laborum magni molestiae mollitia:
</p>
<blockquote>
    <p>Autem beatae consectetur consequatur, facere, facilis fugiat id illo, impedit numquam optio quis sunt ducimus illo.</p>
</blockquote>
<p>
    Adipisci consequuntur doloribus facere in ipsam maxime molestias pofro quam:
</p>
<figure>
    <img
        src="../../../../assets/images/pages/img_6074.jpg"
        alt="">
    <figcaption>
        Accusamus blanditiis labque delectus esse et eum excepturi, impedit ipsam iste maiores minima mollitia, nihil obcaecati
        placeat quaerat qui quidem sint unde!
    </figcaption>
</figure>
`;
export const demoCourseSteps = [
    {
        order: 0,
        title: 'Introduction',
        subtitle: 'Introducing the library and how it works',
        content: `<h2 class="text-2xl sm:text-3xl">Introduction</h1> ${demoCourseContent}`
    },
    {
        order: 1,
        title: 'Get the sample code',
        subtitle: 'Where to find the sample code and how to access it',
        content: `<h2 class="text-2xl sm:text-3xl">Get the sample code</h1> ${demoCourseContent}`
    }
];
