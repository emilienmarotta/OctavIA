'use client';

import { useSearchParams } from 'next/navigation';

export default function ResultPage() {
    const params = useSearchParams();
    const activity = params.get('activity');

    return (
        <section className="mx-auto">
            <h1>Voici ton contenu généré</h1>
            <p className="font-bold text-3xl text-center">Pour l’activité : <strong className={"text-blueOctavia"}>{activity}</strong></p>
        </section>
    );
}