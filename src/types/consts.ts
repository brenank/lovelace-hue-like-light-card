import { Color } from '../core/colors/color';

export class Consts {
    public static readonly Version = 'v1.2.1';
    public static readonly Dev = true;
    public static readonly CardElementName = Consts.Dev ? 'hue-like-light-card-test' : 'hue-like-light-card';
    public static readonly CardName = 'Hue-Like Light Card';
    public static readonly CardDescription = 'Hue-like way to control your lights';

    public static readonly HueBorderRadius = 10;
    public static readonly HueShadow = '0px 2px 3px rgba(0,0,0,0.85)';
    public static readonly LightColor = new Color('#fff');
    public static readonly LightOffColor = new Color('#fff', 0.85);
    public static readonly DarkColor = new Color(0, 0, 0, 0.7);
    public static readonly DarkOffColor = new Color(0, 0, 0, 0.5);
    public static readonly WarmColor = '#ffda95';
    public static readonly ColdColor = '#f5f5ff';
    public static readonly DefaultColor = 'warm';
    public static readonly OffColor = '#666';
    public static readonly TileOffColor = 'rgba(102, 102, 102, 0.8)';
    public static readonly DialogBgColor = '#171717';
    public static readonly DialogFgLightColor = new Color('#aaa');
    public static readonly DialogOffColor = '#363636';
    public static readonly GradientOffset = 10; // percent
    public static readonly TransitionDefault = 'all 0.3s ease-out 0s';
    public static readonly DefaultOneIcon = 'mdi:lightbulb';
    public static readonly DefaultTwoIcon = 'mdi:lightbulb-multiple';
    public static readonly DefaultMoreIcon = 'mdi:lightbulb-group';
    public static readonly TimeCacheInterval = 1500; // ms

    // Theme colors
    public static readonly ThemeDefault = 'default';
    public static readonly ThemeCardBackground = '--hue-detected-card-bg';
    public static readonly ThemeCardBackgroundVar = `var(${Consts.ThemeCardBackground})`;
    public static readonly ThemeCardPossibleBackgrounds = [
        '--ha-card-background',
        '--card-background-color',
        '--paper-card-background-color',
        '--primary-background-color'
    ];
    public static readonly ThemeDialogHeadingColorVar = 'var(--mdc-dialog-heading-ink-color)';
    public static readonly ThemeSecondaryTextColorVar = 'var(--secondary-text-color)';
}