import React from 'react'
import { priceData } from '../../utlits/fackData/priceData'
import { Link } from 'react-router-dom'
import { RiCheckLine, RiShakeHandsLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'

const Pricing = () => {
    return (
        <section className="py-20 md:py-28 border-t border-border">
            <div className="container-main">
                <SlideUp>
                    <div className="mb-14">
                        <span className="text-accent text-sm font-medium uppercase tracking-wider">Pricing</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">Flexible Pricing Plans</h2>
                        <p className="text-text-secondary mt-2 max-w-lg">Starting budgets for common project types. Custom quotes available for complex platforms.</p>
                    </div>
                </SlideUp>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                    {priceData.map(({ features, id, price, sortInfo, title }) => (
                        <Card key={id} id={id} features={features} price={price} sortInfo={sortInfo} title={title} featured={id === 2} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing

const Card = ({ id, title, price, sortInfo, features, featured }) => {
    return (
        <SlideUp delay={id}>
            <div className={`rounded-xl border p-6 transition-all duration-300 relative ${
                featured
                    ? 'bg-elevated border-accent/40 ring-1 ring-accent/20'
                    : 'bg-surface border-border hover:border-text-muted/30'
            }`}>
                {featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="px-3 py-1 bg-accent text-white text-[11px] font-medium rounded-full uppercase tracking-wider">
                            Most Popular
                        </span>
                    </div>
                )}
                <div className="mb-6">
                    <h4 className="text-base font-semibold text-text-primary">{title}</h4>
                    <p className="text-xs text-text-muted mt-1">{sortInfo}</p>
                    <div className="mt-4 flex items-baseline gap-1">
                        <span className="text-xs text-text-secondary">From</span>
                        <span className="text-3xl font-bold text-text-primary tabular-nums">${price}</span>
                        <span className="text-xs text-text-secondary">USD</span>
                    </div>
                </div>
                <ul className="space-y-2.5 mb-6">
                    {features.map(({ id: fid, feature }) => (
                        <li key={fid} className="flex items-start gap-2.5 text-sm text-text-secondary">
                            <RiCheckLine size={15} className="text-accent shrink-0 mt-0.5" />
                            {feature}
                        </li>
                    ))}
                </ul>
                <Link
                    to="/contact"
                    className={`inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                        featured
                            ? 'bg-accent hover:bg-accent-hover text-white'
                            : 'bg-elevated border border-border text-text-primary hover:border-text-muted hover:bg-elevated/80'
                    }`}
                >
                    Get a Quote <RiShakeHandsLine size={15} />
                </Link>
            </div>
        </SlideUp>
    )
}
