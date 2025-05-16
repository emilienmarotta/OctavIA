'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GenerationForm() {
    const router = useRouter();
    const [activity, setActivity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!activity.trim()) return;

        router.push(`/generation?activity=${encodeURIComponent(activity)}`);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="main-cta bottom-border w-[50%] mx-auto flex justify-between mb-16"
        >
            <input
                name="activity"
                type="text"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                placeholder="Décris moi ton activité en quelques mots…"
                autoComplete={"off"}
                className="w-full flex flex-col justify-center outline-none"
            />
            <input
                type="submit"
                value="Générer"
                className="btn-blue shadow-hover"
            />
        </form>
    );
}
