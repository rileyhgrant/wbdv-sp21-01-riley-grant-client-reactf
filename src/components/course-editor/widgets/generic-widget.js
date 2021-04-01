// SO
// this bad larry has to be called when populating the widget list
// you pass in a widget


// when not editing
// it'll check the widets type and just render from that component

// when editing, show the generic bar to change things
// and also render based on widget type

// THIS WAY, the instant type changes, it can re-render based on
// that

// BOOM

import React, { useState } from 'react';

import HeadingWidget from './heading-widget';
import ImageWidget from './image-widget';
import ListWidget from './list-widget';
import ParagraphWidget from './paragraph-widget';

const GenericWidget = ({
  // take in everything the widgets normally take in
  widget,
  editing = false,
  editingWidget,
  setEditingWidget,
}) => {

  return (
    // so really, the plan is to:
    //   have the dropdown here, show nothing if not editing
    //   if editing, display the dropdown
    //   if editing or not, show the widget, widget ALSO knows if its editing
    //   and gets passed the props for that
    <>
      { editing &&
        <>
          {/* <h6>((EDITING: FROM_GENERIC_WIDGET))</h6> */}

          {/* Header dropdown for every widget */}
          <div style={{ "width": "90%" }}>
            <h5 className="m-2">Widget Type:</h5>
            <select
              className="m-2 form-control"
              onChange={(e) => setEditingWidget({ ...editingWidget, type: e.target.value })}
              value={editingWidget.type}>
              <option value={"HEADING"}>Heading</option>
              <option value={"PARAGRAPH"}>Paragraph</option>
              <option value={"LIST"}>List</option>
              <option value={"IMAGE"}>Image</option>
            </select>
          </div>


          {/* Conditional to show widget */}
          { editingWidget.type === "HEADING" &&
            <>
              {/* GW-E: Heading */}
              <HeadingWidget
                widget={widget}
                editing={editing}
                editingWidget={editingWidget}
                setEditingWidget={setEditingWidget} />
            </>
          }

          { editingWidget.type === "PARAGRAPH" &&
            <>
              {/* GW-E: Paragraph */}
              <ParagraphWidget
                widget={widget}
                editing={editing}
                editingWidget={editingWidget}
                setEditingWidget={setEditingWidget} />
            </>
          }

          { editingWidget.type === "LIST" &&
            <>
              {/* GW-E: List */}
              <ListWidget
                widget={widget}
                editing={editing}
                editingWidget={editingWidget}
                setEditingWidget={setEditingWidget} />
            </>
          }

          { editingWidget.type === "IMAGE" &&
            <>
              {/* GW-E: Image */}
              <ImageWidget
                widget={widget}
                editing={editing}
                editingWidget={editingWidget}
                setEditingWidget={setEditingWidget} />
            </>
          }
        </>
      }

      {!editing &&
        <>
          {/* TODO: all these should be NORMAL widget, 'cause not editing */}
          {/* <h6>((NOT-EDITING: FROM_GENERIC_WIDGET))</h6> */}
          { widget.type === "HEADING" &&
            <>
              {/* GW-N: Heading */}
              <HeadingWidget
                widget={widget}
                editing={editing}
                editingWidget={editingWidget}
                setEditingWidget={setEditingWidget} />
            </>
          }

          { widget.type === "PARAGRAPH" &&
            <>
              {/* GW-N: Paragraph */}
              <ParagraphWidget
                widget={widget}
                editing={editing}
                editingWidget={editingWidget}
                setEditingWidget={setEditingWidget} />
            </>
          }

          { widget.type === "LIST" &&
            <>
              {/* GW-N: List */}
              <ListWidget
                widget={widget}
                editing={editing}
                editingWidget={editingWidget}
                setEditingWidget={setEditingWidget} />
            </>
          }

          { widget.type === "IMAGE" &&
            <>
              {/* GW-N: Image */}
              <ImageWidget
                widget={widget}
                editing={editing}
                editingWidget={editingWidget}
                setEditingWidget={setEditingWidget} />
            </>
          }
        </>
      }
    </>
  );
};


export default GenericWidget;
