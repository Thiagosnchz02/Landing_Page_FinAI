// src/pages/SubscriptionPortal.jsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import './SubscriptionPortal.css';

const SubscriptionPortal = () => {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);

            if (user) {
                const { data: profileData, error } = await supabase
                    .from('profiles')
                    .select('plan_type, username')
                    .eq('id', user.id)
                    .single();

                if (error) {
                    console.error('Error fetching profile:', error);
                } else {
                    setProfile(profileData);
                }
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) return <p>Cargando tu información...</p>;
    if (!user || !profile) return <p>No se pudo cargar la información.</p>;

    return (
        <div className="portal-page">
            <h1>Bienvenido, {profile.username || user.email}!</h1>
            <div className="plan-card">
                <div className="plan-header">
                    <h2>Tu Plan Actual</h2>
                    <span className={`plan-badge plan--${profile.plan_type}`}>
                        {profile.plan_type === 'free' ? 'Gratis' : 'Pro'}
                    </span>
                </div>
                <p>Gestiona tu suscripción y accede a todas las ventajas de tu plan.</p>
                <button className="change-plan-button">Cambiar de Plan</button>
            </div>
        </div>
    );
};
export default SubscriptionPortal;