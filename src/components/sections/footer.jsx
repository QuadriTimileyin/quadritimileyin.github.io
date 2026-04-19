import React from 'react'
import { Link } from 'react-router-dom'
import { RiLinkedinFill, RiGithubLine } from '@remixicon/react'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="border-t border-border">
            <div className="container-main py-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
                    <p>
                        Copyright &copy;{year},{' '}
                        <Link to="/" className="text-text-secondary hover:text-accent transition-colors">Timmy</Link>.{' '}
                        All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <p className="hidden sm:block">Crafted with ❤️</p>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.linkedin.com/in/timileyin-q-4b7737231"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="hover:text-accent transition-colors"
                            >
                                <RiLinkedinFill size={17} />
                            </a>
                            <a
                                href="https://github.com/QuadriTimileyin"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="hover:text-accent transition-colors"
                            >
                                <RiGithubLine size={17} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
