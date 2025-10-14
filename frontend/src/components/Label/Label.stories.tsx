import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
    title: 'Components/Label',
    component: Label,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['ranking', 'top10-icon', 'status'],
        },
        variant: {
            control: 'select',
            options: ['Recently Added', 'New Season', 'Leaving Soon'],
        },
        size: {
            control: 'select',
            options: ['small', 'large'],
        },
        ranking: { control: 'number' },
        category: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof Label>;

/* ------------------- Варианты ------------------- */

export const RankingSmall: Story = {
    args: {
        type: 'ranking',
        size: 'small',
        ranking: 3,
        category: 'TV Shows Today',
    },
};

export const RankingLarge: Story = {
    args: {
        type: 'ranking',
        size: 'large',
        ranking: 1,
        category: 'Movies',
    },
};

export const Top10Icon: Story = {
    args: {
        type: 'top10-icon',
    },
};

export const StatusNewSeason: Story = {
    args: {
        type: 'status',
        variant: 'New Season',
    },
};

export const StatusLeavingSoon: Story = {
    args: {
        type: 'status',
        variant: 'Leaving Soon',
    },
};
