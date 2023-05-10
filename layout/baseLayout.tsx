import { FunctionComponent } from "preact";

export const BaseLayout: FunctionComponent = ({ children }) => {
    return <div class="p-4">
        {children}
    </div>
}