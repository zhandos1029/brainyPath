/* eslint-disable */
import {physics2CourseContent, physics3CourseContent, physicsCourseContent} from "./physics";

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
        totalSteps: 3,
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
        totalSteps: 3,
        updatedAt: 'Nov 01, 2021',
        featured: true,
        progress: {
            currentStep: 0,
            completed: 0
        }
    },
];

export const demoCourseSteps = [
    {
        order: 0,
        title: 'Introduction',
        subtitle: 'Introducing the library and how it works',
        content: `<h2 class="text-2xl sm:text-3xl">Физика</h1> ${physicsCourseContent}`
    },
    {
        order: 1,
        title: 'Introduction 2',
        subtitle: 'Where to find the sample code and how to access it',
        content: `<h2 class="text-2xl sm:text-3xl">2 Физика</h1> ${physics2CourseContent}`
    },
    {
        order: 2,
        title: 'Introduction 3',
        subtitle: 'Where to find the sample code and how to access it',
        content: `<h2 class="text-2xl sm:text-3xl">3 Физика</h1> ${physics3CourseContent}`
    }
];
