// @flow

import React from "react";

import { translate } from "../../base/i18n";
import { Icon, IconClose } from "../../base/icons";

type Props = {
    /**
     * The {@link ModalDialog} closing function.
     */
    onClose: Function,

    /**
     * Invoked to obtain translated strings.
     */
    t: Function,
};

/**
 * Custom header of the {@code EmbedMeetingDialog}.
 *
 * @returns {React$Element<any>}
 */
function Header({ onClose, t }: Props) {
    // return (
    //     <div
    //         className = 'embed-meeting-dialog-header'>
    //         { t('embedMeeting.title') }
    //         <Icon
    //             onClick = { onClose }
    //             src = { IconClose } />
    //     </div>
    // );
    return null;
}

export default translate(Header);
