// Library imports
import React from 'react';
// UI imports
import SvgIcon from '@material-ui/core/SvgIcon';

// A custom svg that serves as an outline variant of mdi-material-ui's Sitemap
export default function SitemapOutline() {
    return (
        <SvgIcon>
            <path d='m9 2v6h6v-6h-6zm2 2h2v2h-2v-2z' />
            <path d='m17 16v6h6v-6h-2.5-1-2.5zm2 2h2v2h-2v-2z' />
            <path d='m9 16v6h6v-6h-6zm2 2h2v2h-2v-2z' />
            <path d='m1 16v6h6v-6h-6zm2 2h2v2h-2v-2z' />
            <g>
                <path d='m11 8v2h2v-2z' />
                <path d='m19 14v2h2v-2z' />
                <path d='m14 11v2h2v-2z' />
                <path d='m11 14v2h2v-2z' />
                <path d='m8 11v2h2v-2z' />
                <path d='m3 14v2h2v-2z' />
                <path d='m17 11v2h2v-2z' />
                <path d='m5 11v2h2v-2z' />
                <path d='m11 11v2h2v-2z' />
            </g>
        </SvgIcon>
    );
}
