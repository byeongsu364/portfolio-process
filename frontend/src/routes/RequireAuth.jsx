import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { api } from '../lib/api'
import { Component } from 'react'

export default function RequireAuth ({ Component }) {

    const [ok, setOk] = useState(null)

    useEffect(() => {

        let alive = true

            (async () => {
                try {
                    await api.post('/api/auth/verify-token', {})

                    if (alive) setOk(true)
                } catch (error) {
                    if (alive) setOk(false)
                }
            })()

        return () => { alive = false }
    }, [])

    if (ok === null) return null;

    return ok ?
        <Component /> :
        <Navigate to='/admin/login' replace />
}

