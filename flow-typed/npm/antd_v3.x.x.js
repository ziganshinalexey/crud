// flow-typed signature: ce917915008c08be06679e8e86805a8c
// flow-typed version: df60684302/antd_v3.x.x/flow_>=v0.25.x

declare module 'antd' {
    import type {Node, Component} from 'react';

    declare type ModalReference = {
        destroy: () => void,
    };

    declare type messageFn<TReturn> = (content: React$Node, duration?: number, onClose?: () => mixed) => TReturn;

    declare type modalFnArguments = {
    content?: React$Node,
    onOk?: () => mixed,
    title?: string
  };

    declare function modalFn(args: modalFnArguments): ModalReference;

    declare export class Alert extends React$Component<{}> {}

    declare export class Avatar extends React$Component<{}> {}

    declare export type AutoCompleteDataItem =
        | string
        | {value: string, text: string}
        | React$Element<typeof SelectOption>
        | React$Element<typeof SelectOptGroup>;

    declare export type AutoCompleteProps<T = SelectValue> = {
    allowClear?: boolean,
    autoFocus?: boolean,
    backfill?: boolean,
    dataSource?: AutoCompleteDataItem[],
    defaultActiveFirstOption?: boolean,
    defaultValue?: T,
    disabled?: boolean,
    filterOption?: boolean | (input: string, option: React$Node) => boolean,
    onBlur?: () => void,
    onChange?: (value: T) => void,
    onDropdownVisibleChange?: (open: boolean) => void,
    onFocus?: () => void,
    onSearch?: (value: string) => void,
    onSelect?: (value: T, option: React$Node) => void,
    open?: boolean,
    optionLabelProp?: string,
    placeholder?: string,
    value?: T
  }

    declare export class AutoComplete<T = SelectValue> extends React$Component<AutoCompleteProps<T>> {
    OptGroup: typeof SelectOptGroup;
    Option: typeof SelectOption;
  }

    declare export class Badge extends React$Component<{}> {}

    declare export type ButtonProps = {
    block?: boolean,
    disabled?: boolean,
    ghost?: boolean,
    href?: string,
    htmlType?: string,
    icon?: string,
    loading?: boolean | { delay: number },
    onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void,
    shape?: 'circle' | 'round',
    size?: 'small' | 'large',
    target?: string,
    type?: 'primary' | 'ghost' | 'dashed' | 'danger' | 'default'
  }

    declare export class Button extends React$Component<ButtonProps> {
        static Group: typeof ButtonGroup;
    }

    declare class ButtonGroup extends React$Component<{}> {}

    declare export class Card extends React$Component<{}> {}

    declare export class Checkbox extends React$Component<{}> {
        static Group: typeof CheckboxGroup;
    }

    declare class CheckboxGroup extends React$Component<{}> {}

    declare export class Divider extends React$Component<{}> {}

    declare export class Col extends React$Component<{}> {}

    declare export type DatePickerProps = {};

    declare export class DatePicker extends React$Component<DatePickerProps> {
        static RangePicker: typeof DatePicker$RangePicker;
    }

    declare export class Dropdown extends React$Component<{}> {}

    declare export class Grid extends React$Component<{
        className?: string,
        style?: $Shape<CSSStyleDeclaration>,
    }> {}

    declare export class Meta extends React$Component<{
        avatar?: React$Node,
        className?: string,
        description?: React$Node,
        style?: $Shape<CSSStyleDeclaration>,
        title?: React$Node,
    }> {}

    declare export class Card extends React$Component<{
    actions?: Array<Node>,
    activeTabKey?: string,
    bodyStyle?: $Shape<CSSStyleDeclaration>,
    bordered?: boolean,
    cover?: React$Node,
    defaultActiveTabKey?: string,
    extra?: React$Node,
    headStyle?: $Shape<CSSStyleDeclaration>,
    hoverable?: boolean,
    loading?: boolean,
    onTabChange?: (key: string) => void,
    tabList?: Array<{ key: string, tab: React$Node }>,
    title?: React$Node,
    type?: "inner"
  }> {
        static Grid: typeof Grid;
        static Meta: typeof Meta;
    }

    declare type CascaderOption = {
    children?: CascaderOption[],
    label: string,
    value: string
  };

    declare export type CascaderProps = {
        allowClear?: boolean,
        autoFocus?: boolean,
        changeOnSelect?: boolean,
        className?: string,
        disabled?: boolean,
        expandTrigger?: 'click' | 'hover',
        notFoundContent?: string,
        onChange?: (values: string[]) => mixed,
        options: CascaderOption[],
        placeholder?: string,
        popupClassName?: string,
        popupPlacement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight',
        popupVisible?: boolean,
        showSearch?: boolean,
        size?: 'large' | 'default' | 'small',
        value?: string[],
    };

    declare export class Cascader extends React$Component<CascaderProps> {}

    declare export class Col extends React$Component<{}> {}

    declare export type CollapsePanelProps = {};

    declare class CollapsePanel extends React$Component<CollapsePanelProps> {}

    declare export type CollapseProps = {};

    declare export class Collapse extends React$Component<CollapseProps> {
        static Panel: typeof CollapsePanel;
    }

    declare export class DatePicker extends React$Component<{}> {}

    declare export class Dropdown extends React$Component<{}> {}

    declare export class Drawer extends React$Component<{}> {}

    declare type ValidationRule = {
        enum?: string | string[],
        len?: number,
        max?: number,
        message?: string,
        min?: number,
        pattern?: RegExp,
        required?: boolean,
        transform?: (value: mixed) => mixed,
        type?: string,
        validator?: (rule: mixed, value: mixed, callback: mixed, source?: mixed, options?: mixed) => mixed,
        whitespace?: boolean,
    };
    declare type ValidateCallback = (erros: mixed, values: mixed) => void;
    declare type GetFieldDecoratorOptions = {
        exclusive?: boolean,
        getValueFromEvent?: (...args: mixed[]) => mixed,
        initialValue?: mixed,
        normalize?: (value: mixed, prevValue: mixed, allValues: mixed) => mixed,
        rules?: ValidationRule[],
        trigger?: string,
        validateFirst?: boolean,
        validateTrigger?: string | string[],
        valuePropName?: string,
    };

    declare export type WrappedFormUtils = {
        getFieldDecorator(id: string, options?: GetFieldDecoratorOptions): (node: React$Node) => React$Node,
        getFieldError(name: string): mixed[],
        getFieldsError(names?: Array<string>): mixed,
        getFieldsValue(fieldNames?: Array<string>): mixed,
        getFieldValue(fieldName: string): mixed,
        isFieldsTouched(names?: Array<string>): boolean,
        isFieldTouched(name: string): boolean,
        isFieldValidating(name: string): boolean,
        resetFields(names?: Array<string>): void,
        setFields(obj: Object): void,
        setFieldsValue(obj: Object): void,
        validateFields(callback: ValidateCallback): mixed,
        validateFields(fieldNames: Array<string>, callback: ValidateCallback): mixed,
        validateFields(fieldNames: Array<string>, options: Object, callback: ValidateCallback): mixed,
        validateFields(options: Object, callback: ValidateCallback): mixed,
        validateFieldsAndScroll(fieldNames?: Array<string>, options?: Object, callback?: ValidateCallback): void,
        validateFieldsAndScroll(callback?: ValidateCallback): void,
        validateFieldsAndScroll(fieldNames?: Array<string>, callback?: ValidateCallback): void,
        validateFieldsAndScroll(options?: Object, callback?: ValidateCallback): void,
    };

    declare interface RcBaseFormProps {
        wrappedComponentRef?: any;
    }

    declare interface FormComponentProps extends RcBaseFormProps {
        form: WrappedFormUtils;
    }

    declare type FormWrappedProps<T> = <C: React$ComponentType<T>>(component: C) => React$ComponentType<$Diff<T, {form: *}>>;

    declare export type FormProps = {
        className?: string,
        form?: WrappedFormUtils,
        hideRequiredMark?: boolean,
        horizontal?: boolean,
        inline?: boolean,
        layout?: 'horizontal' | 'inline' | 'vertical',
        onSubmit?: (e: SyntheticEvent<HTMLFormElement>) => void,
        prefixCls?: string,
        style?: $Shape<CSSStyleDeclaration>,
        vertical?: boolean,
    };

    declare export type FormCreateOption<T> = {
    mapPropsToFields?: (props: T) => void,
    onFieldsChange?: (props: T, fields: Array<mixed>) => void,
    onValuesChange?: (props: T, values: mixed) => void,
    withRef?: boolean
  };

    declare export class Form extends React$Component<FormProps> {
    create: <TOwnProps: FormComponentProps>(
      options?: FormCreateOption<TOwnProps>
    ) => FormWrappedProps<TOwnProps>;
    Item: typeof FormItem;
  }

    declare export type FormItemProps = {
    extra?: React$Node,
    help?: React$Node,
    validateStatus?: "success" | "warning" | "error" | "validating" | ""
  };

    declare class FormItem extends React$Component<FormItemProps> {}

    declare export type RangePickerProps = {};

    declare export class DatePicker$RangePicker extends React$Component<RangePickerProps> {}

    declare export class Icon extends React$Component<{}> {}

    declare export class InputNumber extends React$Component<{}> {}

    declare type InputProps = {
        onBlur?: (event: SyntheticFocusEvent<HTMLInputElement>) => mixed,
        onChange?: (event: SyntheticKeyboardEvent<HTMLInputElement>) => mixed,
    };

    declare export class Input extends React$Component<InputProps> {
    Password: typeof InputPassword;
    Search: typeof InputSearch;
    TextArea: typeof InputTextArea;
  }

    declare class InputSearch extends React$Component<{}> {
        input: {input: HTMLInputElement};
    }

    declare class InputTextArea extends React$Component<{}> {}

    declare type InputPasswordProps = {
        visibilityToggle?: boolean,
    };

    // Added in 3.12.0
    declare class InputPassword extends React$Component<InputPasswordProps> {}

    declare export class Layout extends React$Component<{}> {
        static Content: typeof LayoutContent;
        static Footer: typeof LayoutFooter;
        static Header: typeof LayoutHeader;
        static Sider: typeof LayoutSider;
    }

    declare class LayoutContent extends React$Component<{}> {}

    declare class LayoutFooter extends React$Component<{}> {}

    declare class LayoutHeader extends React$Component<{}> {}

    declare class LayoutSider extends React$Component<{}> {}

    declare export type ListItemProps = {};

    declare export class ListItem extends React$Component<ListItemProps> {
        static Meta: typeof Meta;
    }

    declare export class List extends React$Component<{}> {
        static Item: typeof ListItem;
    }

    declare export class LocaleProvider extends React$Component<{}> {}

    declare export type MenuProps = {
        onClick?: ({
            domEvent: SyntheticMouseEvent<HTMLElement>,
            item: React$Component<MenuItem>,
            key: string,
            keyPath: string[],
        }) => mixed,
    };

    declare export class Menu extends React$Component<MenuProps> {
        static Item: typeof MenuItem;
        static SubMenu: typeof MenuSubMenu;
    }

    declare class MenuItem extends React$Component<{}> {}

    declare class MenuSubMenu extends React$Component<{}> {}

    declare export class message {
    config: static config({
      duration?: number,
      getContainer?: () => HTMLElement,
      top?: number
    }): void;
    error: messageFn<mixed>;
    info: messageFn<mixed>;
    loading: messageFn<() => void>;
    success: messageFn<mixed>;
    warn: messageFn<mixed>;
    warning: messageFn<mixed>;
  }

    declare export class Modal extends React$Component<{}> {
    confirm: typeof modalFn;
    error: typeof modalFn;
    info: typeof modalFn;
    success: typeof modalFn;
    warning: typeof modalFn;
  }

    declare export type PaginationProps = {
    current?: number,
    defaultCurrent?: number,
    defaultPageSize?: number,
    hideOnSinglePage?: boolean,
    itemRender?: (
      page: number,
      type: "page" | "prev" | "next",
      originalElement: React$Node
    ) => React$Node,
    onChange?: (page: number, pageSize: number) => void,
    onShowSizeChange?: (current: number, size: number) => void,
    pageSize?: number,
    pageSizeOptions?: string[],
    showQuickJumper?: boolean,
    showSizeChanger?: boolean,
    showTotal?: (total: number, range: number[]) => React$Node,
    simple?: boolean,
    size?: string,
    total?: number
  };

    declare export class Pagination extends React$Component<PaginationProps> {}

    // These props are shared by Tooltip, Popconfirm, and Poopover
    declare type TooltipSharedProps = {
    align?: AlignConfig,
    arrowPointAtCenter?: boolean,
    autoAdjustOverflow?: boolean,
    defaultVisible?: boolean,
    getPopupContainer?: (element?: HTMLElement) => HTMLElement,
    mouseEnterDelay?: number,
    mouseLeaveDelay?: number,
    onVisibleChange?: (visible: boolean) => void,
    overlayClassName?: string,
    overlayStyle?: $Shape<CSSStyleDeclaration>,
    placement?: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom',
    trigger?: 'hover' | 'focus' | 'click' | 'contextMenu',
    visible?: boolean
  }

    // for alignConfig value, antd documentation points to rc-tooltip docs,
    // which poits to https://github.com/yiminghe/dom-align
    declare type AlignConfig = {|
    offset?: number | string,
    overflow?: {| adjustX?: boolean, adjustY?: boolean |},
    points?: string,
    targetOffset?: number | string,
    useCssBottom?: boolean,
    useCssRight?: boolean,
    useCssTransform: ? boolean
  |}

    declare export type PopconfirmProps = {
    cancelText?: string,
    icon?: React$Node,
    okText?: string,
    okType?: 'primary' | 'dashed' | 'ghost' | 'danger' | 'default',
    onCancel?: (event: SyntheticEvent<>) => void,
    onConfirm?: (event: SyntheticEvent<>) => void,
    title?: 'string' | React$Node
  } & TooltipSharedProps

    declare export class Popconfirm extends React$Component<PopconfirmProps> {}

    declare export type PopoverProps = {
        content?: 'string' | React$Node,
        title?: 'string' | React$Node,
    } & TooltipSharedProps;

    declare export class Popover extends React$Component<PopoverProps> {}

    declare export class Progress extends React$Component<{}> {}

    declare export class Radio extends React$Component<{}> {
    Button: typeof RadioButton;
    Group: typeof RadioGroup;
  }

    declare class RadioGroup extends React$Component<{}> {}

    declare class RadioButton extends React$Component<{}> {}

    declare export class Row extends React$Component<{}> {}

    declare export type SelectValue = string | string[] | number | number[];

    declare export type SelectProps<T = SelectValue> = {
    allowClear?: boolean,
    autoClearSearchValue?: boolean,
    autoFocus?: boolean,
    clearIcon?: React$Node,
    defaultActiveFirstOption?: boolean,
    defaultOpen?: boolean,
    defaultValue?: T,
    disabled?: boolean,
    dropdownClassName?: string,
    dropdownMatchSelectWidth?: boolean,
    filterOption?: boolean | (input: string, option: React$Node) => boolean,
    firstActiveValue?: string | string[],
    labelInValue?: boolean,
    loading?: boolean,
    maxTagCount?: number,
    menuItemSelectedIcon?: React$Node,
    mode?: 'default' | 'multiple' | 'tags',
    notFoundContent?: string,
    onBlur?: () => void,
    onChange?: (value: T, option: React$Node) => void,
    onDeselect?: (value: T, option: React$Node) => void,
    onDropdownVisibleChange?: (open: boolean) => void,
    onFocus?: () => void,
    onSearch?: (value: string) => void,
    onSelect?: (value: T, option: React$Node) => void,
    open?: boolean,
    optionFilterProp?: string,
    optionLabelProp?: string,
    placeholder?: string | React$Node,
    removeIcon?: React$Node,
    showArrow?: boolean,
    showSearch?: boolean,
    size?: 'default' | 'small' | 'large' | string,
    suffixIcon?: React$Node,
    tokenSeparators?: string[],
    value?: T
  };

    declare export class Select<T = SelectValue> extends React$Component<SelectProps<T>> {
    blur: () => void;
    focus: () => void;
    OptGroup: typeof SelectOptGroup;
    Option: typeof SelectOption;
  }

    declare export type SelectOptionProps = {
        className?: string,
        disabled?: boolean,
        key?: string,
        title?: string,
        value?: string | number,
    };

    declare class SelectOption extends React$Component<SelectOptionProps> {}

    declare export type SelectOptGroupProps = {
        key?: string,
        label?: string | React$Node,
    };

    declare class SelectOptGroup extends React$Component<SelectOptGroupProps> {}

    declare export class Slider extends React$Component<{}> {}

    declare export type SpinProps = {
        delay?: number,
        size?: 'small' | 'default' | 'large',
        spinning?: boolean,
        tip?: string,
    };

    declare export class Spin extends React$Component<SpinProps> {}

    declare export class Step extends React$Component<{
        description?: React$Node,
        icon?: React$Node,
        status?: 'wait' | 'process' | 'finish' | 'error',
        title?: React$Node,
    }> {}

    declare export class Steps extends React$Component<{
        current?: number,
        direction?: 'horizontal' | 'vertical',
        labelPlacement?: 'horizontal' | 'vertical',
        progressDot?: | boolean
            | ((
                  iconDot: React$Node,
                  {
                      index: number,
                      status: 'wait' | 'process' | 'finish' | 'error',
                      title: React$Node,
                      description: React$Node,
                  }
              ) => React$Node),
        size?: 'default' | 'small',
        status?: 'wait' | 'process' | 'finish' | 'error',
    }> {
        static Step: typeof Step;
    }

    declare export class Switch extends React$Component<{}> {}

    declare export class Table extends React$Component<{}> {}

    declare export class Tabs extends React$Component<{}> {
        static TabPane: typeof TabsTabPane;
    }

    declare export class TabsTabPane extends React$Component<{}> {}

    declare export class Tag extends React$Component<{}> {}

    declare export type TooltipProps = {
        title: React$Node | (() => React$Node),
    } & TooltipSharedProps;

    declare export class Tooltip extends React$Component<TooltipProps> {}

    declare export class TreeSelect extends React$Component<{}> {
        static TreeNode: typeof TreeSelectTreeNode;
    }

    declare export class TreeSelectTreeNode extends React$Component<{}> {}

    declare export class Upload extends React$Component<{}> {
        static Dragger: typeof UploadDragger;
    }

    declare export class UploadDragger extends React$Component<{}> {}

    declare export type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

    declare export type NotificationConfigProps = {
    bottom?: number;
    duration?: number;
    getContainer?: () => HTMLElement;
    placement?: NotificationPlacement;
    top?: number;
  }

    declare export type NotificationProps = {
    bottom?: number;
    btn?: React$Node;
    className?: string;
    description?: React$Node;
    duration?: number | null;
    getContainer?: () => HTMLElement;
    icon?: React$Node;
    key?: string;
    message: React$Node;
    onClick?: () => void;
    onClose?: () => void;
    placement?: NotificationPlacement;
    prefixCls?: string;
    style?: $Shape<CSSStyleDeclaration>;
    top?: number;
    +type?: 'success' | 'info' | 'error' | 'warning';
  }

    declare export class notification {
    close: string => void;
    config: NotificationConfigProps => void;
    destroy: () => void;
    error: NotificationProps => void;
    info: NotificationProps => void;
    open: NotificationProps => void;
    success: NotificationProps => void;
    warn: NotificationProps => void;
    warning: NotificationProps => void;
  }
}
